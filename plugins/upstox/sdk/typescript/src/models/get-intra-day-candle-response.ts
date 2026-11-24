import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intraDayCandleData2Schema, type IntraDayCandleData2 } from "./intra-day-candle-data2.js";
import { statusSchema, type Status } from "./status.js";

export type GetIntraDayCandleResponse = {
  status?: Status;
  /** Get OHLC values for all instruments across various timeframes */
  data?: IntraDayCandleData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIntraDayCandleResponseSchema: Schema<GetIntraDayCandleResponse> =
  s.object<GetIntraDayCandleResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => intraDayCandleData2Schema)),
    },
    { additionalProperties: s.json() },
  );
