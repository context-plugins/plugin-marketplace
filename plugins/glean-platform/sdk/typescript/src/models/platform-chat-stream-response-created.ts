import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformChatStreamResponseCreated = {
  /** @default "RESPONSE_CREATED" */
  type?: "RESPONSE_CREATED";
  /**
   * Platform-owned, non-persisted response envelope identifier in `resp_<uuid>` form. The same
   * identifier is used for every event in one streamed response.
   */
  responseId: string;
};

export const platformChatStreamResponseCreatedSchema: Schema<PlatformChatStreamResponseCreated> =
  s.object<PlatformChatStreamResponseCreated>({
    type: s.defaulted(s.literal("RESPONSE_CREATED"), "RESPONSE_CREATED"),
    responseId: s.string(),
    _keysMap: {
      responseId: "response_id",
    },
  });
