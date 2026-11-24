import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Get OHLC values for all instruments across various timeframes */
export type IntraDayCandleData2 = {
  candles?: Record<string, unknown>[][];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intraDayCandleData2Schema: Schema<IntraDayCandleData2> = s.object<IntraDayCandleData2>(
  {
    candles: s.optional(s.array(s.array(s.record(s.string(), s.unknown())))),
  },
  { additionalProperties: s.json() },
);
