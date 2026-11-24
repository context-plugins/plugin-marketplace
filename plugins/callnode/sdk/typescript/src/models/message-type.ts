import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageType = {
  Sms: "sms",
  Mms: "mms",
} as const;
export type MessageType = (typeof MessageType)[keyof typeof MessageType] | (string & {});

export const messageTypeSchema: EnumSchema<MessageType> = s.enumOf<MessageType>(MessageType);
