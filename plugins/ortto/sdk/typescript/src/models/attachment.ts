import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Attachment = {
  name?: string;
  /** Base64-encoded file contents. */
  data?: string;
  mimeType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentSchema: Schema<Attachment> = s.object<Attachment>(
  {
    name: s.optional(s.string()),
    data: s.optional(s.string()),
    mimeType: s.optional(s.string()),
    _keysMap: {
      mimeType: "mime_type",
    },
  },
  { additionalProperties: s.json() },
);
