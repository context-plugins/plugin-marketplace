import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Valid exchange rate range information for the Exchange Rate Response DTO. */
export type ValidExchangeRateRangeDto = {
  /** Amount range start */
  from?: number;
  /** Amount range end */
  to?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validExchangeRateRangeDtoSchema: Schema<ValidExchangeRateRangeDto> =
  s.object<ValidExchangeRateRangeDto>(
    {
      from: s.optional(s.float64()),
      to: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
