import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerFeedbackSchema, type CustomerFeedback } from "./customer-feedback.js";

export type AnomalyStatusUpdate = {
  /**
   * Partial review-status update. Fields that are omitted are left unchanged. `reviewStatus` drives
   * the state machine; `resolution` and `resolutionNote` apply only when resolving.
   */
  customerFeedback: CustomerFeedback;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalyStatusUpdateSchema: Schema<AnomalyStatusUpdate> = s.object<AnomalyStatusUpdate>(
  {
    customerFeedback: customerFeedbackSchema,
  },
  { additionalProperties: s.json() },
);
