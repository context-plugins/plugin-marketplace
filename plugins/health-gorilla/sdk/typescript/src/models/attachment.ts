import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Attachment = {
  contentType?: string;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentSchema: Schema<Attachment> = s.object<Attachment>(
  {
    contentType: s.optional(s.string()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
