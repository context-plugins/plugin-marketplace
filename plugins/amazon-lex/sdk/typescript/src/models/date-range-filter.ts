import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DateRangeFilter = {
  /** A timestamp indicating the start date for the date range filter. */
  startDateTime: Date;
  /** A timestamp indicating the end date for the date range filter. */
  endDateTime: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateRangeFilterSchema: Schema<DateRangeFilter> = s.object<DateRangeFilter>(
  {
    startDateTime: s.dateTime(),
    endDateTime: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
