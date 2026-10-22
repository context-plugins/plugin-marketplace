import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The monitoring metric alerting policy captured at the time of incident creation. */
export type AlertingPolicy = Record<string, unknown>;

export const alertingPolicySchema: Schema<AlertingPolicy> = s.of<AlertingPolicy>(
  s.union([s.record(s.string(), s.unknown())]),
);
