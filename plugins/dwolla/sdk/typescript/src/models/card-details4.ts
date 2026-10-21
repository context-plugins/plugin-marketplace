import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Optional. Opt into Account Name Inquiry (ANI) for this session by providing the expected
 * cardholder name. Retrieve the resulting match on the Exchange with `GET /exchanges/{id}`.
 */
export type CardDetails4 = {
  /** The cardholder first name you expect on the card. */
  firstName: string;
  /** The cardholder last name you expect on the card. */
  lastName: string;
  /** Set to `true` to request an Account Name Inquiry (ANI) name-match check on the card. */
  accountNameInquiry: boolean;
};

export const cardDetails4Schema: Schema<CardDetails4> = s.object<CardDetails4>({
  firstName: s.string(),
  lastName: s.string(),
  accountNameInquiry: s.boolean(),
});
