import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardDetails4Schema, type CardDetails4 } from "./card-details4.js";
import { links24Schema, type Links24 } from "./links24.js";

/**
 * Create an exchange session for debit card capture (Push to Card).
 *
 * Optionally opt into Account Name Inquiry (ANI) by passing `cardDetails` with the cardholder name
 * you expect on the card. The name-match result is returned on the resulting Exchange as
 * `cardDetails.accountNameInquiry`, giving you an early signal of fraudulent card usage before you
 * create a funding source.
 */
export type CreateCustomerExchangeSessionForCard = {
  links: Links24;
  /**
   * Optional. Opt into Account Name Inquiry (ANI) for this session by providing the expected
   * cardholder name. Retrieve the resulting match on the Exchange with `GET /exchanges/{id}`.
   */
  cardDetails?: CardDetails4;
};

export const createCustomerExchangeSessionForCardSchema: Schema<CreateCustomerExchangeSessionForCard> =
  s.object<CreateCustomerExchangeSessionForCard>({
    links: links24Schema,
    cardDetails: s.optional(s.lazy(() => cardDetails4Schema)),
    _keysMap: {
      links: "_links",
    },
  });
