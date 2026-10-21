import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The monitoring metric incident policy captured at the time of incident creation. */
export type IncidentPolicy = Record<string, unknown>;

export const incidentPolicySchema: Schema<IncidentPolicy> = s.of<IncidentPolicy>(
  s.union([s.record(s.string(), s.unknown())]),
);
