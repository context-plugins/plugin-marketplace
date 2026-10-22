import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to dial requests whose enrichment is unresolved (no lookup data). Applied per rule: it
 * decides what a rule contributes when *that rule's* attribute is unresolved, and never overrides a
 * rule the request definitively failed -- so a request that fails one rule is still skipped even if
 * a different rule's attribute is missing. "Unresolved" covers a missing value and also the value
 * Twilio returns to mean "looked up, could not answer": for line_type that is 'unknown' (a valid
 * number whose line type it could not determine), and for caller_type both no CNAM data at all
 * (non-US numbers) and 'UNDETERMINED' (a US number it looked up but could not classify).
 */
export const OnUnknown = {
  Include: "include",
  Exclude: "exclude",
} as const;
export type OnUnknown = (typeof OnUnknown)[keyof typeof OnUnknown] | (string & {});

export const onUnknownSchema: EnumSchema<OnUnknown> = s.enumOf<OnUnknown>(OnUnknown);
