import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HistoricalUsage = {
  /** the usage count during the time period */
  count?: number;
  /** ISO_TIMESTAMP of the beginning of the time period */
  unitStart?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historicalUsageSchema: Schema<HistoricalUsage> = s.object<HistoricalUsage>(
  {
    count: s.optional(s.int()),
    unitStart: s.optional(s.string()),
    _keysMap: {
      unitStart: "unit_start",
    },
  },
  { additionalProperties: s.json() },
);
