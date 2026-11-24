import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code = {
  NotFound: "NOT_FOUND",
  ComplianceRestricted: "COMPLIANCE_RESTRICTED",
  EnrichFailed: "ENRICH_FAILED",
  NoScore: "NO_SCORE",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
