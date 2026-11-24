import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * PlainText - The message contains plain UTF-8 text. CustomPayload - The message is a custom format
 * for the client. SSML - The message contains text formatted for voice output. Composite - The
 * message contains an escaped JSON object containing one or more messages. For more information,
 * see Message Groups.
 */
export const MessageFormat = {
  PlainText: "PlainText",
  CustomPayload: "CustomPayload",
  Ssml: "SSML",
  Composite: "Composite",
} as const;
export type MessageFormat = (typeof MessageFormat)[keyof typeof MessageFormat] | (string & {});

export const messageFormatSchema: EnumSchema<MessageFormat> = s.enumOf<MessageFormat>(MessageFormat);
