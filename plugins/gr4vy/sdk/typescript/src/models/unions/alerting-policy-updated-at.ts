import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date and time when the alerting policy was last updated. */
export type AlertingPolicyUpdatedAt = Date;

export const alertingPolicyUpdatedAtSchema: Schema<AlertingPolicyUpdatedAt> = s.of<AlertingPolicyUpdatedAt>(
  s.union([s.dateTime()]),
);
