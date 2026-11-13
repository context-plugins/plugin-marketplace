import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The fields templates actually round-trip through `FileAttachment`. Typed (rather than a raw dict)
 * so a malformed client value fails validation with a 400 here instead of crashing string
 * operations (e.g. `.replace()` on `file_name`) later in CSV serialization. Unrecognized keys (e.g.
 * server-computed thumbnail fields the client is just echoing back from preview) are ignored rather
 * than rejected.
 *
 * `file_name` is required: `append_file_attachment` only emits an attachment marker when a name is
 * present, so a file_attachment without one would validate here yet vanish silently at save time
 * (and, absent any other content, take the whole comment down with it - see
 * `ContentProjectNote._validate_has_content`).
 */
export type ContentFileAttachment = {
  /** Attachment filename. */
  fileName: string;
  /** Attachment URL, subject to the attachment URL allow-list. */
  fileUrl?: string | null;
  /** Attachment size in bytes. */
  fileSize?: number | null;
  /** Attachment MIME type. */
  fileType?: string | null;
  /** Attachment image URL, subject to the attachment URL allow-list. */
  image?: string | null;
  /** Attachment upload state. */
  uploadState?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentFileAttachmentProperties: s.Shape<ContentFileAttachment> = {
  fileName: s.string(),
  fileUrl: s.optionalNullable(s.string()),
  fileSize: s.optionalNullable(s.int()),
  fileType: s.optionalNullable(s.string()),
  image: s.optionalNullable(s.string()),
  uploadState: s.optionalNullable(s.string()),
  _keysMap: {
    fileName: "file_name",
    fileUrl: "file_url",
    fileSize: "file_size",
    fileType: "file_type",
    uploadState: "upload_state",
  },
};

export const contentFileAttachmentInternalSchema: Schema<ContentFileAttachment> =
  s.object<ContentFileAttachment>(contentFileAttachmentProperties, { additionalProperties: s.json() });

export const contentFileAttachmentSchema: Schema<ContentFileAttachment> = s.lazySchema(() =>
  s.object<ContentFileAttachment>(
    {
      ...contentFileAttachmentProperties,
      fileName: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
