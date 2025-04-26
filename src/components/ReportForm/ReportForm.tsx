import React, { useState } from 'react';
import { Incident } from '../../types/Incident';
import "./ReportForm.css";

interface Props {
  onAdd: (incident: Incident) => void;
}

const ReportForm: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState<{ title?: string; description?: string; date?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required.";
    } else if (title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    }

    if (!description.trim()) {
      newErrors.description = "Description is required.";
    } else if (description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters.";
    }

    if (!date.trim()) {
      newErrors.date = "Date and Time are required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newIncident: Incident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date(date).toISOString(),
    };
    onAdd(newIncident);
    setTitle('');
    setDescription('');
    setSeverity('Low');
    setDate('');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="report-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      {errors.title && <span className="error-text">{errors.title}</span>}

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      {errors.description && <span className="error-text">{errors.description}</span>}

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value as any)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {errors.date && <span className="error-text">{errors.date}</span>}

      <button type="submit">Report Incident</button>
    </form>
  );
};

export default ReportForm;
