import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The incident policy of the monitoring metric. */
export type IncidentPolicy1 = Record<string, unknown>;

export const incidentPolicy1Schema: Schema<IncidentPolicy1> = s.of<IncidentPolicy1>(
  s.union([s.record(s.string(), s.unknown())]),
);
