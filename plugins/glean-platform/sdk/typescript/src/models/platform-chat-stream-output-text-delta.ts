import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformChatStreamOutputTextDelta = {
  /** @default "RESPONSE_OUTPUT_TEXT_DELTA" */
  type?: "RESPONSE_OUTPUT_TEXT_DELTA";
  /**
   * Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same
   * identifier is used for every event in one streamed response.
   */
  responseId: string;
  delta: string;
};

export const platformChatStreamOutputTextDeltaSchema: Schema<PlatformChatStreamOutputTextDelta> =
  s.object<PlatformChatStreamOutputTextDelta>({
    type: s.defaulted(s.literal("RESPONSE_OUTPUT_TEXT_DELTA"), "RESPONSE_OUTPUT_TEXT_DELTA"),
    responseId: s.string(),
    delta: s.string(),
    _keysMap: {
      responseId: "response_id",
    },
  });
