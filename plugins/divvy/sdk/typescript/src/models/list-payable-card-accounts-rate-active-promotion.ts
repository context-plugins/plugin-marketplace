import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** List Payable Card Accounts Rate Active Promotion. */
export type ListPayableCardAccountsRateActivePromotion = {
  /** Promotion start date */
  startDate?: Date;
  /** Promotion end date */
  endDate?: Date;
  /** Credit card rate */
  creditCardRate?: number;
  /** Debit card rate */
  debitCardRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPayableCardAccountsRateActivePromotionSchema: Schema<ListPayableCardAccountsRateActivePromotion> =
  s.object<ListPayableCardAccountsRateActivePromotion>(
    {
      startDate: s.optional(s.dateTime()),
      endDate: s.optional(s.dateTime()),
      creditCardRate: s.optional(s.float64()),
      debitCardRate: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
