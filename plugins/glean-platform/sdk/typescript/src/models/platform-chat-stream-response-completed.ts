import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatCompletedResponseSchema,
  type PlatformChatCompletedResponse,
} from "./platform-chat-completed-response.js";

export type PlatformChatStreamResponseCompleted = {
  /** @default "RESPONSE_COMPLETED" */
  type?: "RESPONSE_COMPLETED";
  /**
   * Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same
   * identifier is used for every event in one streamed response.
   */
  responseId: string;
  response: PlatformChatCompletedResponse;
};

export const platformChatStreamResponseCompletedSchema: Schema<PlatformChatStreamResponseCompleted> =
  s.object<PlatformChatStreamResponseCompleted>({
    type: s.defaulted(s.literal("RESPONSE_COMPLETED"), "RESPONSE_COMPLETED"),
    responseId: s.string(),
    response: platformChatCompletedResponseSchema,
    _keysMap: {
      responseId: "response_id",
    },
  });
