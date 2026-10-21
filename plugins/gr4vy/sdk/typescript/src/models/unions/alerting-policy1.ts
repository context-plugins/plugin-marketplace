import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The alerting policy of the monitoring metric. */
export type AlertingPolicy1 = Record<string, unknown>;

export const alertingPolicy1Schema: Schema<AlertingPolicy1> = s.of<AlertingPolicy1>(
  s.union([s.record(s.string(), s.unknown())]),
);
