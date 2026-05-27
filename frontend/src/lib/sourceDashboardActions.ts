export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "wildfire-prediction-response",
    "label": "Wildfire Prediction Response",
    "description": "Open Wildfire Prediction Response workflows elevated from AIWildfirePredictionResponse.",
    "href": "/wildfire-risk-forecast",
    "sourceProjects": [
      "AIWildfirePredictionResponse"
    ],
    "examples": [
      "Wildfire Risk Forecast",
      "Response Resource Plan",
      "Evacuation Zone Review"
    ],
    "count": 1
  }
];
