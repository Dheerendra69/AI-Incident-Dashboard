import React from 'react';
import './IncidentFilter.css';

interface Props {
  selected: string;
  onChange: (severity: string) => void;
}

const IncidentFilter: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <select
      className="incident-filter"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  );
};


export default IncidentFilter;