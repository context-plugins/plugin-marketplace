import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date and time when the incident policy was last updated. */
export type IncidentPolicyUpdatedAt = Date;

export const incidentPolicyUpdatedAtSchema: Schema<IncidentPolicyUpdatedAt> = s.of<IncidentPolicyUpdatedAt>(
  s.union([s.dateTime()]),
);
