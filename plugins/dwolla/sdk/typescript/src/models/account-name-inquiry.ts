import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of comparing the expected cardholder name supplied on the exchange session against the
 * name the card issuer has on file.
 * - `full-match`: the expected name matched the name on file.
 * - `partial-match`: part of the expected name matched, for example the last name only.
 * - `no-match`: the expected name did not match the name on file.
 * - `not-performed`: ANI was not requested, or the check did not run.
 * - `not-supported`: the card issuer or network does not support ANI.
 */
export const AccountNameInquiry = {
  FullMatch: "full-match",
  PartialMatch: "partial-match",
  NoMatch: "no-match",
  NotPerformed: "not-performed",
  NotSupported: "not-supported",
} as const;
export type AccountNameInquiry = (typeof AccountNameInquiry)[keyof typeof AccountNameInquiry] | (string & {});

export const accountNameInquirySchema: EnumSchema<AccountNameInquiry> =
  s.enumOf<AccountNameInquiry>(AccountNameInquiry);
