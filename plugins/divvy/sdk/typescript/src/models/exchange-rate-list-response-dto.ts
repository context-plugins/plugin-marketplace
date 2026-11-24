import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { amountRangeSchema, type AmountRange } from "./amount-range.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";

/** Exchange Rate Response DTO. */
export type ExchangeRateListResponseDto = {
  billCurrency?: CurrencyCode;
  paymentCurrency?: CurrencyCode;
  baseCurrency?: CurrencyCode;
  /**
   * Exchange rate. This rate compares the organization's base currency and the vendor
   * `paymentCurrency` value.
   *
   * For example, if the organization's base currency is USD and the vendor `paymentCurrency` is
   * CAD, an `exchangeRate` of `1.372` tells us that `1 USD = 1.372 CAD`.
   */
  exchangeRate?: number;
  /** BILL-generated ID of the international vendor */
  vendorId?: string;
  amountRange?: AmountRange;
  /** Exchange rate batch expiration date and time */
  expirationTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangeRateListResponseDtoSchema: Schema<ExchangeRateListResponseDto> =
  s.object<ExchangeRateListResponseDto>(
    {
      billCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
      paymentCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
      baseCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
      exchangeRate: s.optional(s.float64()),
      vendorId: s.optional(s.string()),
      amountRange: s.optional(s.lazy(() => amountRangeSchema)),
      expirationTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
