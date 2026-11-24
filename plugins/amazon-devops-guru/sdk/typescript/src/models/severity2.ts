import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The severity of the insight. For more information, see Understanding insight severities in the
 * Amazon DevOps Guru User Guide.
 */
export const Severity2 = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type Severity2 = (typeof Severity2)[keyof typeof Severity2] | (string & {});

export const severity2Schema: EnumSchema<Severity2> = s.enumOf<Severity2>(Severity2);
