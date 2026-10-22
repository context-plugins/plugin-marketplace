import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format to use when sending logs to Loki (Protobuf or JSON) */
export const MessageFormat = {
  Protobuf: "protobuf",
  Json: "json",
} as const;
export type MessageFormat = (typeof MessageFormat)[keyof typeof MessageFormat] | (string & {});

export const messageFormatSchema: EnumSchema<MessageFormat> = s.enumOf<MessageFormat>(MessageFormat);
