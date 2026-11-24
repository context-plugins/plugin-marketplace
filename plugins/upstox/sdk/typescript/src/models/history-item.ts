import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HistoryItem = {
  /** Amount value in the reported period */
  value?: number;
  /** Reporting period */
  period?: string;
  /** Percentage change compared to previous period */
  change?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyItemSchema: Schema<HistoryItem> = s.object<HistoryItem>(
  {
    value: s.optional(s.float64()),
    period: s.optional(s.string()),
    change: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
