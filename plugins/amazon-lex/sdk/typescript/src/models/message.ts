import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customPayloadSchema, type CustomPayload } from "./custom-payload.js";
import { imageResponseCardSchema, type ImageResponseCard } from "./image-response-card.js";
import { plainTextMessageSchema, type PlainTextMessage } from "./plain-text-message.js";
import { ssmlMessageSchema, type SsmlMessage } from "./ssml-message.js";

export type Message = {
  plainTextMessage?: PlainTextMessage;
  customPayload?: CustomPayload;
  ssmlMessage?: SsmlMessage;
  imageResponseCard?: ImageResponseCard;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageSchema: Schema<Message> = s.object<Message>(
  {
    plainTextMessage: s.optional(s.lazy(() => plainTextMessageSchema)),
    customPayload: s.optional(s.lazy(() => customPayloadSchema)),
    ssmlMessage: s.optional(s.lazy(() => ssmlMessageSchema)),
    imageResponseCard: s.optional(s.lazy(() => imageResponseCardSchema)),
  },
  { additionalProperties: s.json() },
);
