import React from 'react';
import { Incident } from '../../types/Incident';
import './IncidentItem.css';

interface Props {
  incident: Incident;
  onToggle: () => void;
}

const IncidentItem: React.FC<Props> = ({ incident, onToggle }) => {
  const formattedReportedAt = new Date(incident.reported_at).toLocaleString();

  return (
    <div className="incident-item">
      <h3>{incident.title}</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Reported:</strong> {formattedReportedAt}</p>
      <button onClick={onToggle}>{incident.expanded ? 'Hide Details' : 'View Details'}</button>
      {incident.expanded && <p>{incident.description}</p>}
    </div>
  );
};

export default IncidentItem;
