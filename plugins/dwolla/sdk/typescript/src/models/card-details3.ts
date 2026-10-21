import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountNameInquirySchema, type AccountNameInquiry } from "./account-name-inquiry.js";

/**
 * Card-specific details. Only present for card exchanges where an Account Name Inquiry (ANI) was
 * requested on the exchange session.
 */
export type CardDetails3 = {
  /**
   * The result of comparing the expected cardholder name supplied on the exchange session against
   * the name the card issuer has on file.
   * - `full-match`: the expected name matched the name on file.
   * - `partial-match`: part of the expected name matched, for example the last name only.
   * - `no-match`: the expected name did not match the name on file.
   * - `not-performed`: ANI was not requested, or the check did not run.
   * - `not-supported`: the card issuer or network does not support ANI.
   */
  accountNameInquiry: AccountNameInquiry;
};

export const cardDetails3Schema: Schema<CardDetails3> = s.object<CardDetails3>({
  accountNameInquiry: accountNameInquirySchema,
});
