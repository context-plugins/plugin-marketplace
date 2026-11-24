import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomerStateCreditBalance = {
  creditsCurrencyId: string;
  currencyName: string;
  currencyKey: string;
  balance: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateCreditBalanceSchema: Schema<CustomerStateCreditBalance> =
  s.object<CustomerStateCreditBalance>(
    {
      creditsCurrencyId: s.string(),
      currencyName: s.string(),
      currencyKey: s.string(),
      balance: s.float64(),
    },
    { additionalProperties: s.json() },
  );
