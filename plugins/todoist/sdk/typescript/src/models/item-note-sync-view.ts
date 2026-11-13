import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileAttachmentSchema, type FileAttachment } from "./unions/file-attachment.js";

/**
 * A representation of an Item Note View, extending the base class NoteSyncView, to be returned to
 * clients in a sync (or sync-like) response.
 */
export type ItemNoteSyncView = {
  /** String ID of the comment. */
  id: string;
  /** String ID of the user who posted the comment. */
  postedUid: string | null;
  /** Comment content. */
  content?: string;
  /** File attachment metadata, or `null` when the comment has no attachment. */
  fileAttachment: Record<string, FileAttachment | null> | null;
  /** String IDs of users notified by the comment. */
  uidsToNotify: string[] | null;
  /** Whether the comment is deleted. */
  isDeleted: boolean;
  /** Date and time when the comment was posted, or `null` if unknown. */
  postedAt: Date | null;
  /** Reaction emoji mapped to user IDs that reacted. */
  reactions: Record<string, unknown> | null;
  itemId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemNoteSyncViewSchema: Schema<ItemNoteSyncView> = s.object<ItemNoteSyncView>(
  {
    id: s.string(),
    postedUid: s.nullable(s.string()),
    content: s.optional(s.string()),
    fileAttachment: s.nullable(s.record(s.string(), s.nullable(s.lazy(() => fileAttachmentSchema)))),
    uidsToNotify: s.nullable(s.array(s.string())),
    isDeleted: s.boolean(),
    postedAt: s.nullable(s.dateTime()),
    reactions: s.nullable(s.record(s.string(), s.unknown())),
    itemId: s.nullable(s.string()),
    _keysMap: {
      postedUid: "posted_uid",
      fileAttachment: "file_attachment",
      uidsToNotify: "uids_to_notify",
      isDeleted: "is_deleted",
      postedAt: "posted_at",
      itemId: "item_id",
    },
  },
  { additionalProperties: s.json() },
);
