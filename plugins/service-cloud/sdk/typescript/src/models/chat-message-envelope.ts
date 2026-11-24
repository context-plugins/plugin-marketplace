import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseOptionsSchema, type ResponseOptions } from "./response-options.js";
import { message1Schema, type Message1 } from "./unions/message1.js";

export type ChatMessageEnvelope = {
  /** Message to the bot. */
  message: Message1;
  /** Configuration of additional information returned in the response payload. */
  responseOptions?: ResponseOptions;
};

export const chatMessageEnvelopeSchema: Schema<ChatMessageEnvelope> = s.object<ChatMessageEnvelope>({
  message: message1Schema,
  responseOptions: s.optional(s.lazy(() => responseOptionsSchema)),
});
