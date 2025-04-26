import { Incident } from '../types/Incident';

export const mockIncidents: Incident[] = [
    {
      id: 1,
      title: 'Biased Recommendation Algorithm',
      description:
        'The recommendation algorithm showed a consistent bias by favoring content towards specific demographic groups over others.',
      severity: 'Medium',
      reported_at: '2025-03-15T10:00:00Z',
    },
    {
      id: 2,
      title: 'LLM Hallucination in Critical Info',
      description:
        'The Large Language Model (LLM) generated false information regarding critical safety procedures, potentially leading to risks.',
      severity: 'High',
      reported_at: '2025-04-01T14:30:00Z',
    },
    {
      id: 3,
      title: 'Minor Data Leak via Chatbot',
      description:
        'The chatbot unintentionally revealed non-sensitive user metadata during interactions, resulting in a minor data leak.',
      severity: 'Low',
      reported_at: '2025-03-20T09:15:00Z',
    },
];