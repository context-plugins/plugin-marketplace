import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LowConfidenceReason = {
  ShortText: "short_text",
  ListFormat: "list_format",
} as const;
export type LowConfidenceReason =
  | (typeof LowConfidenceReason)[keyof typeof LowConfidenceReason]
  | (string & {});

export const lowConfidenceReasonSchema: EnumSchema<LowConfidenceReason> =
  s.enumOf<LowConfidenceReason>(LowConfidenceReason);
