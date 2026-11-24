import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * *Conditional*. Only relevant for custom fields of type `date`. This object reflects the chosen
 * date (and optionally, time) value of a `date` custom field. If no date is selected, the value of
 * `date_value` will be `null`.
 */
export type DateValue = {
  /** A string representing the date in YYYY-MM-DD format. */
  date?: string;
  /**
   * A string representing the date in ISO 8601 format. If no time value is selected, the value of
   * `date-time` will be `null`.
   */
  dateTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateValueSchema: Schema<DateValue> = s.object<DateValue>(
  {
    date: s.optional(s.string()),
    dateTime: s.optional(s.string()),
    _keysMap: {
      dateTime: "date_time",
    },
  },
  { additionalProperties: s.json() },
);
