import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditCurrencySchema, type CreditCurrency } from "./credit-currency.js";

export type CreditCurrencyListResponse = {
  data: CreditCurrency[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditCurrencyListResponseSchema: Schema<CreditCurrencyListResponse> =
  s.object<CreditCurrencyListResponse>(
    {
      data: s.array(s.lazy(() => creditCurrencySchema)),
    },
    { additionalProperties: s.json() },
  );
