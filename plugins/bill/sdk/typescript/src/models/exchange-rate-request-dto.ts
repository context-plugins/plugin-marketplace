import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DTO for exchange rate request. */
export type ExchangeRateRequestDto = {
  /** BILL-generated ID of the international vendor to be paid. The value begins with `009`. */
  vendorId: string;
  /** Payment amount. The amount is in the vendor bill currency. */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const exchangeRateRequestDtoProperties: s.Shape<ExchangeRateRequestDto> = {
  vendorId: s.string(),
  amount: s.float64(),
};

export const exchangeRateRequestDtoInternalSchema: Schema<ExchangeRateRequestDto> =
  s.object<ExchangeRateRequestDto>(exchangeRateRequestDtoProperties, { additionalProperties: s.json() });

export const exchangeRateRequestDtoSchema: Schema<ExchangeRateRequestDto> = s.lazySchema(() =>
  s.object<ExchangeRateRequestDto>(
    {
      ...exchangeRateRequestDtoProperties,
      vendorId: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
