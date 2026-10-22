import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatMetadataResultSchema, type ChatMetadataResult } from "./chat-metadata-result.js";

export type ListChatsResponse = {
  chatResults?: ChatMetadataResult[];
  /**
   * An opaque cursor for fetching the next page of results. If empty, there are no more results.
   */
  cursor?: string;
};

export const listChatsResponseSchema: Schema<ListChatsResponse> = s.object<ListChatsResponse>({
  chatResults: s.optional(s.array(s.lazy(() => chatMetadataResultSchema))),
  cursor: s.optional(s.string()),
});
