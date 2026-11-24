import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolutionNoteSchema, type ResolutionNote } from "./resolution-note.js";
import { resolutionSchema, type Resolution } from "./resolution.js";
import { reviewStatusSchema, type ReviewStatus } from "./review-status.js";

/**
 * Partial review-status update. Fields that are omitted are left unchanged. `reviewStatus` drives
 * the state machine; `resolution` and `resolutionNote` apply only when resolving.
 */
export type CustomerFeedback = {
  /** The review state to move the anomaly to. */
  reviewStatus?: ReviewStatus;
  /**
   * Required when `reviewStatus` is `RESOLVED`; forbidden otherwise. Qualifies whether the anomaly
   * was confirmed as real.
   */
  resolution?: Resolution;
  /** Optional reason and comment captured on a resolve transition. */
  resolutionNote?: ResolutionNote;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerFeedbackSchema: Schema<CustomerFeedback> = s.object<CustomerFeedback>(
  {
    reviewStatus: s.optional(s.lazy(() => reviewStatusSchema)),
    resolution: s.optional(s.lazy(() => resolutionSchema)),
    resolutionNote: s.optional(s.lazy(() => resolutionNoteSchema)),
  },
  { additionalProperties: s.json() },
);
