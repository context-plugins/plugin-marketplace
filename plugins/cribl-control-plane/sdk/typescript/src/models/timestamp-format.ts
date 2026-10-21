import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timestampTypeSchema, type TimestampType } from "./timestamp-type.js";

/** Configuration for extracting and parsing timestamps from events. */
export type TimestampFormat = {
  /**
   * Method to use for timestamp extraction. Use <code>auto</code> for automatic detection,
   * <code>format</code> to specify a strptime format, or <code>current</code> to use the current
   * system time.
   */
  type: TimestampType;
  /**
   * Maximum number of characters to search for a timestamp value from the beginning of the match.
   */
  length?: number;
  /**
   * Strptime format string for parsing timestamps (for example, <code>%Y-%m-%d %H:%M:%S</code>).
   */
  format?: string;
};

export const timestampFormatSchema: Schema<TimestampFormat> = s.object<TimestampFormat>({
  type: timestampTypeSchema,
  length: s.optional(s.float64()),
  format: s.optional(s.string()),
});
