import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentFileAttachmentInternalSchema,
  contentFileAttachmentSchema,
  type ContentFileAttachment,
} from "./content-file-attachment.js";

export type ContentNote = {
  /** Comment text. May be empty when an attachment is present. */
  content?: string;
  /** Comment author user ID. */
  postedUid?: string | null;
  /** Comment timestamp. */
  postedAt?: string | null;
  /** Comment attachment. Unrecognized preview fields are ignored. */
  fileAttachment?: ContentFileAttachment | null;
  /** Task reference within this graph. */
  itemId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentNoteProperties: s.Shape<ContentNote> = {
  content: s.optional(s.string()),
  postedUid: s.optionalNullable(s.string()),
  postedAt: s.optionalNullable(s.string()),
  fileAttachment: s.optionalNullable(s.lazy(() => contentFileAttachmentInternalSchema)),
  itemId: s.string(),
  _keysMap: {
    postedUid: "posted_uid",
    postedAt: "posted_at",
    fileAttachment: "file_attachment",
    itemId: "item_id",
  },
};

export const contentNoteInternalSchema: Schema<ContentNote> = s.object<ContentNote>(contentNoteProperties, {
  additionalProperties: s.json(),
});

export const contentNoteSchema: Schema<ContentNote> = s.lazySchema(() =>
  s.object<ContentNote>(
    {
      ...contentNoteProperties,
      content: s.optional(s.string().check(s.maxLength(15000))),
      postedUid: s.optionalNullable(s.string().check(s.pattern("^\\d+$"))),
      postedAt: s.optionalNullable(s.string().check(s.maxLength(64))),
      fileAttachment: s.optionalNullable(s.lazy(() => contentFileAttachmentSchema)),
      itemId: s.string().check(s.minLength(1), s.maxLength(64)),
    },
    { additionalProperties: s.json() },
  ),
);
