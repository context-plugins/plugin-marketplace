import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardDetails2Schema, type CardDetails2 } from "./card-details2.js";

/**
 * Request body for updating a debit card funding source.
 *
 * Every field is optional, but you must provide at least one. Only the fields you send are changed;
 * omitted fields keep their current values. Use this operation to add or update the optional
 * cardholder identity fields - `dateOfBirth`, `countryOfBirth`, and `identification` - on a card
 * funding source that already exists.
 *
 * Card funding sources cannot be updated with bank fields such as `routingNumber`, `accountNumber`,
 * `bankAccountType`, or `bankAccountHolderType`.
 */
export type UpdateCardFundingSource = {
  /** Arbitrary nickname for the debit card funding source. Must be 50 characters or less. */
  name?: string;
  /** Cardholder details to add or update. Provide only the fields you want to change. */
  cardDetails?: CardDetails2;
};

export const updateCardFundingSourceSchema: Schema<UpdateCardFundingSource> =
  s.object<UpdateCardFundingSource>({
    name: s.optional(s.string()),
    cardDetails: s.optional(s.lazy(() => cardDetails2Schema)),
  });
