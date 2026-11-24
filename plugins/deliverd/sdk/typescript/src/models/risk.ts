import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Risk = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type Risk = (typeof Risk)[keyof typeof Risk] | (string & {});

export const riskSchema: EnumSchema<Risk> = s.enumOf<Risk>(Risk);
