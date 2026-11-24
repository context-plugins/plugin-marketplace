import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * An object that may be returned with your query results, providing context about the state of the
 * data. When you request recent data (using `all` or `hourly_all` for `dataState`), some of the
 * rows returned may represent data that is incomplete, which means that the data is still being
 * collected and processed. This metadata object helps you identify exactly when this starts and
 * ends. All dates and times provided in this object are in the `America/Los_Angeles` time zone. The
 * specific field returned within this object depends on how you've grouped your data in the
 * request. See details in inner fields.
 */
export type Metadata = {
  /**
   * The first date for which the data is still being collected and processed, presented in
   * `YYYY-MM-DD` format (ISO-8601 extended local date format). This field is populated only when
   * the request's `dataState` is "`all`", data is grouped by "`DATE`", and the requested date range
   * contains incomplete data points. All values after the `first_incomplete_date` may still change
   * noticeably.
   */
  firstIncompleteDate?: string;
  /**
   * The first hour for which the data is still being collected and processed, presented in
   * `YYYY-MM-DDThh:mm:ss[+|-]hh:mm` format (ISO-8601 extended offset date-time format). This field
   * is populated only when the request's `dataState` is "`hourly_all`", data is grouped by "`HOUR`"
   * and the requested date range contains incomplete data points. All values after the
   * `first_incomplete_hour` may still change noticeably.
   */
  firstIncompleteHour?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>(
  {
    firstIncompleteDate: s.optional(s.string()),
    firstIncompleteHour: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
