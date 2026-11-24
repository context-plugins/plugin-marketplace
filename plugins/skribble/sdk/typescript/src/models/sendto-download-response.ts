import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SendtoDownloadResponse = {
  /** Base64-encoded document content. */
  content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sendtoDownloadResponseSchema: Schema<SendtoDownloadResponse> = s.object<SendtoDownloadResponse>(
  {
    content: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
