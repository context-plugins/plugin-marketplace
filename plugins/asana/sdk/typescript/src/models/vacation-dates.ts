import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Contains keys `start_on` and `end_on` for the vacation dates for the user in this workspace. If
 * `start_on` is null, the entire `vacation_dates` object will be null. If `end_on` is before today,
 * the entire `vacation_dates` object will be null.
 */
export type VacationDates = {
  /**
   * The day on which the user's vacation in this workspace starts. This is a date with `YYYY-MM-DD`
   * format.
   */
  startOn?: string;
  /**
   * The day on which the user's vacation in this workspace ends, or null if there is no end date.
   * This is a date with `YYYY-MM-DD` format.
   */
  endOn?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vacationDatesSchema: Schema<VacationDates> = s.object<VacationDates>(
  {
    startOn: s.optional(s.string()),
    endOn: s.optionalNullable(s.string()),
    _keysMap: {
      startOn: "start_on",
      endOn: "end_on",
    },
  },
  { additionalProperties: s.json() },
);
