import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DateRange = {
  lte?: string;
  gte?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateRangeSchema: Schema<DateRange> = s.object<DateRange>(
  {
    lte: s.optional(s.dateOnly()),
    gte: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
