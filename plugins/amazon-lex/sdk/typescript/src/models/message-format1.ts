import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The format of the response message. One of the following values: PlainText - The message contains
 * plain UTF-8 text. CustomPayload - The message is a custom format for the client. SSML - The
 * message contains text formatted for voice output. Composite - The message contains an escaped
 * JSON object containing one or more messages from the groups that messages were assigned to when
 * the intent was created.
 */
export const MessageFormat1 = {
  PlainText: "PlainText",
  CustomPayload: "CustomPayload",
  Ssml: "SSML",
  Composite: "Composite",
} as const;
export type MessageFormat1 = (typeof MessageFormat1)[keyof typeof MessageFormat1] | (string & {});

export const messageFormat1Schema: EnumSchema<MessageFormat1> = s.enumOf<MessageFormat1>(MessageFormat1);
