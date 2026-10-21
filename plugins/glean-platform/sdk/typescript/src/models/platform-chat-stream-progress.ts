import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformChatStreamProgress = {
  /** @default "RESPONSE_PROGRESS" */
  type?: "RESPONSE_PROGRESS";
  /**
   * Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same
   * identifier is used for every event in one streamed response.
   */
  responseId: string;
  /**
   * Verbatim concatenated fragment text from an assistant UPDATE wire message. Display-oriented
   * passthrough only; not part of the final answer and not present on terminal response snapshots.
   */
  text: string;
};

export const platformChatStreamProgressSchema: Schema<PlatformChatStreamProgress> =
  s.object<PlatformChatStreamProgress>({
    type: s.defaulted(s.literal("RESPONSE_PROGRESS"), "RESPONSE_PROGRESS"),
    responseId: s.string(),
    text: s.string(),
    _keysMap: {
      responseId: "response_id",
    },
  });
