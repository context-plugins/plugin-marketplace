import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exchangeRateListResponseDtoSchema,
  type ExchangeRateListResponseDto,
} from "./exchange-rate-list-response-dto.js";

/** DTO for exchange rates response. */
export type ExchangeRatesResponseDto = {
  exchangeRateBatchId?: number;
  exchangeRates?: ExchangeRateListResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangeRatesResponseDtoSchema: Schema<ExchangeRatesResponseDto> =
  s.object<ExchangeRatesResponseDto>(
    {
      exchangeRateBatchId: s.optional(s.int()),
      exchangeRates: s.optional(s.array(s.lazy(() => exchangeRateListResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
