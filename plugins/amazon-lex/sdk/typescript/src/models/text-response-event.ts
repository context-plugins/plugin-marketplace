import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeV2LexMessageSchema, type RuntimeV2LexMessage } from "./runtime-v2-lex-message.js";

export type TextResponseEvent = {
  /**
   * A list of messages to send to the user. Messages are ordered based on the order that you
   * returned the messages from your Lambda function or the order that the messages are defined in
   * the bot.
   */
  messages?: RuntimeV2LexMessage[];
  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form
   * RESPONSE-N, where N is a number starting with one and incremented for each event sent by Amazon
   * Lex V2 in the current session.
   */
  eventId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textResponseEventSchema: Schema<TextResponseEvent> = s.object<TextResponseEvent>(
  {
    messages: s.optional(s.array(s.lazy(() => runtimeV2LexMessageSchema))),
    eventId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
