import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateRangeFilterSchema, type DateRangeFilter } from "./date-range-filter.js";

export type LexTranscriptFilter = {
  dateRangeFilter?: DateRangeFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lexTranscriptFilterSchema: Schema<LexTranscriptFilter> = s.object<LexTranscriptFilter>(
  {
    dateRangeFilter: s.optional(s.lazy(() => dateRangeFilterSchema)),
  },
  { additionalProperties: s.json() },
);
