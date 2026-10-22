import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Method to use for timestamp extraction. Use <code>auto</code> for automatic detection,
 * <code>format</code> to specify a strptime format, or <code>current</code> to use the current
 * system time.
 */
export const TimestampType = {
  Auto: "auto",
  Format: "format",
  Current: "current",
} as const;
export type TimestampType = (typeof TimestampType)[keyof typeof TimestampType] | (string & {});

export const timestampTypeSchema: EnumSchema<TimestampType> = s.enumOf<TimestampType>(TimestampType);
