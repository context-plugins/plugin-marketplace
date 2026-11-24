import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Attachment = {
  id?: number;
  fileName?: string;
  contentUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentSchema: Schema<Attachment> = s.object<Attachment>(
  {
    id: s.optional(s.int()),
    fileName: s.optional(s.string()),
    contentUrl: s.optional(s.string()),
    _keysMap: {
      fileName: "file_name",
      contentUrl: "content_url",
    },
  },
  { additionalProperties: s.json() },
);
