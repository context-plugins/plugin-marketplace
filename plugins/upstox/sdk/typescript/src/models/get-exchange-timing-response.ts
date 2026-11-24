import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exchangeTimingDataSchema, type ExchangeTimingData } from "./exchange-timing-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetExchangeTimingResponse = {
  status?: Status;
  /** Response data for exchange timing list */
  data?: ExchangeTimingData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getExchangeTimingResponseSchema: Schema<GetExchangeTimingResponse> =
  s.object<GetExchangeTimingResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.array(s.lazy(() => exchangeTimingDataSchema))),
    },
    { additionalProperties: s.json() },
  );
