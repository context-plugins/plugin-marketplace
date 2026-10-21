import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformChatStreamOutputTextDone = {
  /** @default "RESPONSE_OUTPUT_TEXT_DONE" */
  type?: "RESPONSE_OUTPUT_TEXT_DONE";
  /**
   * Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same
   * identifier is used for every event in one streamed response.
   */
  responseId: string;
  text: string;
};

export const platformChatStreamOutputTextDoneSchema: Schema<PlatformChatStreamOutputTextDone> =
  s.object<PlatformChatStreamOutputTextDone>({
    type: s.defaulted(s.literal("RESPONSE_OUTPUT_TEXT_DONE"), "RESPONSE_OUTPUT_TEXT_DONE"),
    responseId: s.string(),
    text: s.string(),
    _keysMap: {
      responseId: "response_id",
    },
  });
