import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The syslog message format depending on the receiver's support */
export const MessageFormat4 = {
  Rfc3164: "rfc3164",
  Rfc5424: "rfc5424",
} as const;
export type MessageFormat4 = (typeof MessageFormat4)[keyof typeof MessageFormat4] | (string & {});

export const messageFormat4Schema: EnumSchema<MessageFormat4> = s.enumOf<MessageFormat4>(MessageFormat4);
