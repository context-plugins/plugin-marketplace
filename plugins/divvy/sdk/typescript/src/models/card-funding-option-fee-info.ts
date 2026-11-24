import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Card funding option fee info. */
export type CardFundingOptionFeeInfo = {
  /** Card fees amount */
  amount?: number;
  /** Card fees rate */
  rate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cardFundingOptionFeeInfoSchema: Schema<CardFundingOptionFeeInfo> =
  s.object<CardFundingOptionFeeInfo>(
    {
      amount: s.optional(s.float64()),
      rate: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
