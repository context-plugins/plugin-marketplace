import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatOutputMessageSchema,
  type PlatformChatOutputMessage,
} from "./platform-chat-output-message.js";
import {
  platformChatResponseErrorSchema,
  type PlatformChatResponseError,
} from "./platform-chat-response-error.js";

export type PlatformChatFailedResponse = {
  /**
   * Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same
   * identifier is used for every event in one streamed response.
   */
  id: string;
  /** @default "RESPONSE" */
  object?: "RESPONSE";
  /** RFC 3339 UTC timestamp when the response was created. */
  createdAt: Date;
  /** @default "FAILED" */
  status?: "FAILED";
  output: PlatformChatOutputMessage[];
  store: boolean;
  /** Present when the interaction was persisted. */
  conversationId?: string | null;
  requestId: string;
  error: PlatformChatResponseError;
};

export const platformChatFailedResponseSchema: Schema<PlatformChatFailedResponse> =
  s.object<PlatformChatFailedResponse>({
    id: s.string(),
    object: s.defaulted(s.literal("RESPONSE"), "RESPONSE"),
    createdAt: s.dateTime(),
    status: s.defaulted(s.literal("FAILED"), "FAILED"),
    output: s.array(s.lazy(() => platformChatOutputMessageSchema)),
    store: s.boolean(),
    conversationId: s.optionalNullable(s.string()),
    requestId: s.string(),
    error: platformChatResponseErrorSchema,
    _keysMap: {
      createdAt: "created_at",
      conversationId: "conversation_id",
      requestId: "request_id",
    },
  });
