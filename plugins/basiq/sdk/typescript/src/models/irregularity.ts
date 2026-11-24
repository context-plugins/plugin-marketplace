import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Irregularity = {
  /** Array of dates for which the expected credit is not met */
  gaps: string[];
  /**
   * Stability percentage indicator of how stable the income is. 100 = no gaps in the income series
   * from the source. Calculated as (number of transactions that are included in the income summary
   * for this source) / (number of transactions that were expected to be included in the income
   * summary for this source).
   */
  stability: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const irregularitySchema: Schema<Irregularity> = s.object<Irregularity>(
  {
    gaps: s.array(s.string()),
    stability: s.string(),
  },
  { additionalProperties: s.json() },
);
