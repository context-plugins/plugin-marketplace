import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeSeriesIdentifiersSchema, type TimeSeriesIdentifiers } from "./time-series-identifiers.js";

export type TimeSeriesSelector = {
  timeSeriesIdentifiers?: TimeSeriesIdentifiers;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeSeriesSelectorSchema: Schema<TimeSeriesSelector> = s.object<TimeSeriesSelector>(
  {
    timeSeriesIdentifiers: s.optional(s.lazy(() => timeSeriesIdentifiersSchema)),
    _keysMap: {
      timeSeriesIdentifiers: "TimeSeriesIdentifiers",
    },
  },
  { additionalProperties: s.json() },
);
