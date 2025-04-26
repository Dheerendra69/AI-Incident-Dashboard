import React from 'react';
import './IncidentSort.css';

interface Props {
  sortOrder: string;
  onChange: (order: string) => void;
}

const IncidentSort: React.FC<Props> = ({ sortOrder, onChange }) => {
  return (
    <select
      className="incident-sort"
      value={sortOrder}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
    </select>
  );
};

export default IncidentSort;