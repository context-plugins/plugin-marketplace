import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historicalCandleData2Schema, type HistoricalCandleData2 } from "./historical-candle-data2.js";
import { statusSchema, type Status } from "./status.js";

export type GetHistoricalCandleResponse = {
  status?: Status;
  /** Get OHLC values for all instruments across various timeframes */
  data?: HistoricalCandleData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getHistoricalCandleResponseSchema: Schema<GetHistoricalCandleResponse> =
  s.object<GetHistoricalCandleResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => historicalCandleData2Schema)),
    },
    { additionalProperties: s.json() },
  );
