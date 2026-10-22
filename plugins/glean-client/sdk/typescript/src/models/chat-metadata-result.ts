import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatMetadataSchema, type ChatMetadata } from "./chat-metadata.js";

export type ChatMetadataResult = {
  /**
   * Metadata of a Chat a user had with Glean Assistant. This contains no actual conversational
   * content.
   */
  chat?: ChatMetadata;
  /** An opaque token that represents this particular Chat. To be used for `/feedback` reporting. */
  trackingToken?: string;
};

export const chatMetadataResultSchema: Schema<ChatMetadataResult> = s.object<ChatMetadataResult>({
  chat: s.optional(s.lazy(() => chatMetadataSchema)),
  trackingToken: s.optional(s.string()),
});
