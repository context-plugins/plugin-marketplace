import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Attachment = {
  filename: string;
  /** Base64 (a data URL is accepted). */
  content: string;
  contentType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const attachmentProperties: s.Shape<Attachment> = {
  filename: s.string(),
  content: s.string(),
  contentType: s.optional(s.string()),
  _keysMap: {
    contentType: "content_type",
  },
};

export const attachmentInternalSchema: Schema<Attachment> = s.object<Attachment>(attachmentProperties, {
  additionalProperties: s.json(),
});

export const attachmentSchema: Schema<Attachment> = s.lazySchema(() =>
  s.object<Attachment>(
    {
      ...attachmentProperties,
      filename: s.string().check(s.maxLength(200)),
    },
    { additionalProperties: s.json() },
  ),
);
