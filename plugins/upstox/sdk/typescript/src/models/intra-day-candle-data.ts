import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IntraDayCandleData = {
  candles?: Record<string, unknown>[][];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intraDayCandleDataSchema: Schema<IntraDayCandleData> = s.object<IntraDayCandleData>(
  {
    candles: s.optional(s.array(s.array(s.record(s.string(), s.unknown())))),
  },
  { additionalProperties: s.json() },
);
