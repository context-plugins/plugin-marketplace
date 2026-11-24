import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The severity of the anomaly. The severity of anomalies that generate an insight determine that
 * insight's severity. For more information, see Understanding insight severities in the Amazon
 * DevOps Guru User Guide.
 */
export const Severity = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (string & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
