import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * legit, sales_pitch, spam and scam on a qualification are also community reports (jid.com/privacy
 * section 2b).
 */
export const Outcome = {
  Legit: "legit",
  SalesPitch: "sales_pitch",
  Spam: "spam",
  Scam: "scam",
  Closed: "closed",
  Good: "good",
  Junk: "junk",
  NoResponse: "no_response",
} as const;
export type Outcome = (typeof Outcome)[keyof typeof Outcome] | (string & {});

export const outcomeSchema: EnumSchema<Outcome> = s.enumOf<Outcome>(Outcome);
