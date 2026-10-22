import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatFileMetadataSchema, type ChatFileMetadata } from "./chat-file-metadata.js";

/** Structure for file uploaded by a user for Chat. */
export type ChatFile = {
  /** Unique identifier of the file. */
  id?: string;
  /** Url of the file. */
  url?: string;
  /** Name of the uploaded file. */
  name?: string;
  /** Metadata of a file uploaded by a user for Chat. */
  metadata?: ChatFileMetadata;
};

export const chatFileSchema: Schema<ChatFile> = s.object<ChatFile>({
  id: s.optional(s.string()),
  url: s.optional(s.string()),
  name: s.optional(s.string()),
  metadata: s.optional(s.lazy(() => chatFileMetadataSchema)),
});
