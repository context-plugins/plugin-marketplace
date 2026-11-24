import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExchangeTimingData = {
  exchange?: string;
  startTime?: number;
  endTime?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangeTimingDataSchema: Schema<ExchangeTimingData> = s.object<ExchangeTimingData>(
  {
    exchange: s.optional(s.string()),
    startTime: s.optional(s.int()),
    endTime: s.optional(s.int()),
    _keysMap: {
      startTime: "start_time",
      endTime: "end_time",
    },
  },
  { additionalProperties: s.json() },
);
