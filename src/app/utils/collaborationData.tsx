export interface CollaborationData {
    event_title: string;
    tokens_amount: number;
    event_closed: boolean;
  }
  
  export const dataTest: CollaborationData[] = [
    {
      event_title: "Mi primer evento en Solana",
      tokens_amount: 4,
      event_closed: true
    },
    {
      event_title: "#HeavyDutyCamp v3",
      tokens_amount: 12,
      event_closed: false
    },
  ]
  