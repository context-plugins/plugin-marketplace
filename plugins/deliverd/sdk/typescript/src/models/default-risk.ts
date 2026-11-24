import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The urgency an approval inherits when the caller declares none */
export const DefaultRisk = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type DefaultRisk = (typeof DefaultRisk)[keyof typeof DefaultRisk] | (string & {});

export const defaultRiskSchema: EnumSchema<DefaultRisk> = s.enumOf<DefaultRisk>(DefaultRisk);
