import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolutionNote1Schema, type ResolutionNote1 } from "./resolution-note1.js";
import { resolution1Schema, type Resolution1 } from "./resolution1.js";
import { reviewStatus1Schema, type ReviewStatus1 } from "./review-status1.js";

/**
 * Current review status of the anomaly, as set in the console or through `patchAnomaly`. Always
 * present; an anomaly nobody has reviewed yet reports `NEEDS_REVIEW`.
 */
export type AnomalyCustomerFeedback = {
  /** The anomaly's review state. */
  reviewStatus: ReviewStatus1;
  /** Whether the anomaly was confirmed as real. Present only when `reviewStatus` is `RESOLVED`. */
  resolution?: Resolution1;
  /**
   * The feedback reason given when the anomaly was resolved. Present only when `reviewStatus` is
   * `RESOLVED` and a reason was given. The resolution comment is not included.
   */
  resolutionNote?: ResolutionNote1;
  /** Time of the last review-feedback update. Absent when the anomaly was never reviewed. */
  updatedAt?: Date;
  /**
   * Email of the user who made the last review-feedback update. Absent when the anomaly was never
   * reviewed.
   */
  updatedBy?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalyCustomerFeedbackSchema: Schema<AnomalyCustomerFeedback> =
  s.object<AnomalyCustomerFeedback>(
    {
      reviewStatus: reviewStatus1Schema,
      resolution: s.optional(s.lazy(() => resolution1Schema)),
      resolutionNote: s.optional(s.lazy(() => resolutionNote1Schema)),
      updatedAt: s.optional(s.dateTime()),
      updatedBy: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
