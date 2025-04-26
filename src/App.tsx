import React, { useState } from 'react';
import { Incident } from './types/Incident';
import { mockIncidents } from './data/mockIncidents';
import IncidentItem from './components/IncidentItem/IncidentItem';
import IncidentFilter from './components/IncidentFilter/IncidentFilter';
import IncidentSort from './components/IncidentSort/IncidentSort';
import ReportForm from './components/ReportForm/ReportForm';
import { motion } from "framer-motion";

import './App.css';

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const filtered = incidents.filter(i => filter === 'All' || i.severity === filter);
  const sorted = [...filtered].sort((a, b) =>
    sortOrder === 'newest'
      ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
      : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
  );

  const toggleExpand = (id: number) => {
    setIncidents(prev =>
      prev.map(i => (i.id === id ? { ...i, expanded: !i.expanded } : i))
    );
  };

  const addIncident = (incident: Incident) => {
    setIncidents(prev => [incident, ...prev]);
  };

  return (
    <div className="App">
      <motion.h1 
  className="heading" 
  initial={{ opacity: 0, y: -100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  AI Incident Dashboard
</motion.h1>
      <ReportForm onAdd={addIncident} />
      <div className="controls">
        <IncidentFilter selected={filter} onChange={setFilter} />
        <IncidentSort sortOrder={sortOrder} onChange={setSortOrder} />
      </div>
      <div className="incident-grid">
  {sorted.map(incident => (
    <IncidentItem
      key={incident.id}
      incident={incident}
      onToggle={() => toggleExpand(incident.id)}
    />
  ))}
</div>
    </div>
  );
};

export default App;
