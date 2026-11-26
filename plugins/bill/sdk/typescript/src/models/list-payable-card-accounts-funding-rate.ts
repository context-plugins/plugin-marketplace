import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** List Payable Card Accounts Funding Rate. */
export type ListPayableCardAccountsFundingRate = {
  /** Credit card funding rate */
  creditCardRate?: number;
  /** Debit card funding rate */
  debitCardRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPayableCardAccountsFundingRateSchema: Schema<ListPayableCardAccountsFundingRate> =
  s.object<ListPayableCardAccountsFundingRate>(
    {
      creditCardRate: s.optional(s.float64()),
      debitCardRate: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
