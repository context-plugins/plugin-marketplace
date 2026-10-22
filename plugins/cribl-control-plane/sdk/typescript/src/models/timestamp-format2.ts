import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Timestamp format to use when serializing event's time field */
export const TimestampFormat2 = {
  Syslog: "syslog",
  Iso8601: "iso8601",
} as const;
export type TimestampFormat2 = (typeof TimestampFormat2)[keyof typeof TimestampFormat2] | (string & {});

export const timestampFormat2Schema: EnumSchema<TimestampFormat2> =
  s.enumOf<TimestampFormat2>(TimestampFormat2);
