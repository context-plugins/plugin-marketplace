import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatStreamResponseCreatedSchema,
  type PlatformChatStreamResponseCreated,
} from "./platform-chat-stream-response-created.js";

export type PlatformChatStreamResponseCreatedServerSentEvent = {
  id?: string;
  /** @default "RESPONSE_CREATED" */
  event?: "RESPONSE_CREATED";
  data: PlatformChatStreamResponseCreated;
};

export const platformChatStreamResponseCreatedServerSentEventSchema: Schema<PlatformChatStreamResponseCreatedServerSentEvent> =
  s.object<PlatformChatStreamResponseCreatedServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("RESPONSE_CREATED"), "RESPONSE_CREATED"),
    data: platformChatStreamResponseCreatedSchema,
  });
