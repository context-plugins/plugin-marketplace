import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the most severe error on the page. If a page has both warnings and errors, the page
 * status is error. Error status means the page cannot be shown in Search results.
 */
export const Verdict2 = {
  VerdictUnspecified: "VERDICT_UNSPECIFIED",
  Pass: "PASS",
  Partial: "PARTIAL",
  Fail: "FAIL",
  Neutral: "NEUTRAL",
} as const;
export type Verdict2 = (typeof Verdict2)[keyof typeof Verdict2] | (string & {});

export const verdict2Schema: EnumSchema<Verdict2> = s.enumOf<Verdict2>(Verdict2);
