import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformChatFailedResponseSchema,
  type PlatformChatFailedResponse,
} from "./platform-chat-failed-response.js";

export type PlatformChatStreamResponseFailed = {
  /** @default "RESPONSE_FAILED" */
  type?: "RESPONSE_FAILED";
  /**
   * Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same
   * identifier is used for every event in one streamed response.
   */
  responseId: string;
  response: PlatformChatFailedResponse;
};

export const platformChatStreamResponseFailedSchema: Schema<PlatformChatStreamResponseFailed> =
  s.object<PlatformChatStreamResponseFailed>({
    type: s.defaulted(s.literal("RESPONSE_FAILED"), "RESPONSE_FAILED"),
    responseId: s.string(),
    response: platformChatFailedResponseSchema,
    _keysMap: {
      responseId: "response_id",
    },
  });
