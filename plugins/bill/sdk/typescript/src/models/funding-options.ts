import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankFundingOptionSchema, type BankFundingOption } from "./bank-funding-option.js";
import { cardFundingOptionSchema, type CardFundingOption } from "./card-funding-option.js";

/** Funding options. */
export type FundingOptions = {
  /** Bank account options */
  banks?: BankFundingOption[];
  /** Card account options */
  cards?: CardFundingOption[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingOptionsSchema: Schema<FundingOptions> = s.object<FundingOptions>(
  {
    banks: s.optional(s.array(s.lazy(() => bankFundingOptionSchema))),
    cards: s.optional(s.array(s.lazy(() => cardFundingOptionSchema))),
  },
  { additionalProperties: s.json() },
);
