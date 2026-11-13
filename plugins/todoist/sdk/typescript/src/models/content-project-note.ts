import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentFileAttachmentInternalSchema,
  contentFileAttachmentSchema,
  type ContentFileAttachment,
} from "./content-file-attachment.js";

export type ContentProjectNote = {
  /** Comment text. May be empty when an attachment is present. */
  content?: string;
  /** Comment author user ID. */
  postedUid?: string | null;
  /** Comment timestamp. */
  postedAt?: string | null;
  /** Comment attachment. Unrecognized preview fields are ignored. */
  fileAttachment?: ContentFileAttachment | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentProjectNoteProperties: s.Shape<ContentProjectNote> = {
  content: s.optional(s.string()),
  postedUid: s.optionalNullable(s.string()),
  postedAt: s.optionalNullable(s.string()),
  fileAttachment: s.optionalNullable(s.lazy(() => contentFileAttachmentInternalSchema)),
  _keysMap: {
    postedUid: "posted_uid",
    postedAt: "posted_at",
    fileAttachment: "file_attachment",
  },
};

export const contentProjectNoteInternalSchema: Schema<ContentProjectNote> = s.object<ContentProjectNote>(
  contentProjectNoteProperties,
  { additionalProperties: s.json() },
);

export const contentProjectNoteSchema: Schema<ContentProjectNote> = s.lazySchema(() =>
  s.object<ContentProjectNote>(
    {
      ...contentProjectNoteProperties,
      content: s.optional(s.string().check(s.maxLength(15000))),
      postedUid: s.optionalNullable(s.string().check(s.pattern("^\\d+$"))),
      postedAt: s.optionalNullable(s.string().check(s.maxLength(64))),
      fileAttachment: s.optionalNullable(s.lazy(() => contentFileAttachmentSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
