import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HistogramEntry = {
  /** The value of the entry. */
  value?: number;
  /** The prevalence of the entry. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const histogramEntrySchema: Schema<HistogramEntry> = s.object<HistogramEntry>(
  {
    value: s.optional(s.float64()),
    count: s.optional(s.int()),
    _keysMap: {
      value: "Value",
      count: "Count",
    },
  },
  { additionalProperties: s.json() },
);
