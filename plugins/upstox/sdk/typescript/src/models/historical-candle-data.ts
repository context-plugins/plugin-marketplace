import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HistoricalCandleData = {
  candles?: Record<string, unknown>[][];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historicalCandleDataSchema: Schema<HistoricalCandleData> = s.object<HistoricalCandleData>(
  {
    candles: s.optional(s.array(s.array(s.record(s.string(), s.unknown())))),
  },
  { additionalProperties: s.json() },
);
