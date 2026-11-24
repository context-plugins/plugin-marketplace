import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Statistics = {
  /** The number of values in the field. If the response value is -1, refer to CountLong. */
  count?: number;
  /**
   * The number of distinct values in the field. If the response value is -1, refer to
   * CountDistinctLong.
   */
  countDistinct?: number;
  /**
   * The number of null values in the field. If the response value is -1, refer to CountNullLong.
   */
  countNull?: number;
  /**
   * The number of NAN (not a number) values in the field. If the response value is -1, refer to
   * CountNanLong.
   */
  countNan?: number;
  /** For a numeric field, the minimum value in the field. */
  min?: string;
  /** For a numeric field, the maximum value in the field. */
  max?: string;
  /** For a numeric field, the average value in the field. */
  avg?: number;
  /** For a numeric field, the standard deviation. */
  stddev?: number;
  /**
   * The number of values in the field. CountLong is used instead of Count if the value is greater
   * than 2,147,483,647.
   */
  countLong?: number;
  /**
   * The number of distinct values in the field. CountDistinctLong is used instead of CountDistinct
   * if the value is greater than 2,147,483,647.
   */
  countDistinctLong?: number;
  /**
   * The number of null values in the field. CountNullLong is used instead of CountNull if the value
   * is greater than 2,147,483,647.
   */
  countNullLong?: number;
  /**
   * The number of NAN (not a number) values in the field. CountNanLong is used instead of CountNan
   * if the value is greater than 2,147,483,647.
   */
  countNanLong?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statisticsSchema: Schema<Statistics> = s.object<Statistics>(
  {
    count: s.optional(s.int()),
    countDistinct: s.optional(s.int()),
    countNull: s.optional(s.int()),
    countNan: s.optional(s.int()),
    min: s.optional(s.string()),
    max: s.optional(s.string()),
    avg: s.optional(s.float64()),
    stddev: s.optional(s.float64()),
    countLong: s.optional(s.int()),
    countDistinctLong: s.optional(s.int()),
    countNullLong: s.optional(s.int()),
    countNanLong: s.optional(s.int()),
    _keysMap: {
      count: "Count",
      countDistinct: "CountDistinct",
      countNull: "CountNull",
      countNan: "CountNan",
      min: "Min",
      max: "Max",
      avg: "Avg",
      stddev: "Stddev",
      countLong: "CountLong",
      countDistinctLong: "CountDistinctLong",
      countNullLong: "CountNullLong",
      countNanLong: "CountNanLong",
    },
  },
  { additionalProperties: s.json() },
);
