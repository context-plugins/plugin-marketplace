import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardDetails1Schema, type CardDetails1 } from "./card-details1.js";
import { links8Schema, type Links8 } from "./links8.js";

/** Schema for creating a debit card funding source using an Exchange. Used for Push to Card. */
export type CreateCustomerCardFundingSourceWithExchange = {
  links: Links8;
  /** Arbitrary nickname for the debit card funding source. Must be 50 characters or less. */
  name: string;
  cardDetails: CardDetails1;
};

export const createCustomerCardFundingSourceWithExchangeSchema: Schema<CreateCustomerCardFundingSourceWithExchange> =
  s.object<CreateCustomerCardFundingSourceWithExchange>({
    links: links8Schema,
    name: s.string(),
    cardDetails: cardDetails1Schema,
    _keysMap: {
      links: "_links",
    },
  });
