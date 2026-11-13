import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Linked files are stored on a third-party website and linked to one or more Stories. Shortcut
 * currently supports linking files from Google Drive, Dropbox, Box, and by URL.
 */
export type LinkedFile = {
  /** The description of the file. */
  description: string | null;
  /** A string description of this resource. */
  entityType: string;
  /** The IDs of the stories this file is attached to. */
  storyIds: number[];
  /** `Deprecated:` use `member_mention_ids`. */
  mentionIds: string[];
  /** The members that are mentioned in the description of the file. */
  memberMentionIds: string[];
  /** The name of the linked file. */
  name: string;
  /** The URL of the file thumbnail, if the integration provided it. */
  thumbnailUrl: string | null;
  /** The integration type (e.g. google, dropbox, box). */
  type: string;
  /** The filesize, if the integration provided it. */
  size: number | null;
  /** The UUID of the member that uploaded the file. */
  uploaderId: string;
  /** The content type of the image (e.g. txt/plain). */
  contentType: string | null;
  /** The time/date the LinkedFile was updated. */
  updatedAt: Date;
  /** The groups that are mentioned in the description of the file. */
  groupMentionIds: string[];
  /** The unique identifier for the file. */
  id: number;
  /** The URL of the file. */
  url: string;
  /** The time/date the LinkedFile was created. */
  createdAt: Date;
};

export const linkedFileSchema: Schema<LinkedFile> = s.object<LinkedFile>({
  description: s.nullable(s.string()),
  entityType: s.string(),
  storyIds: s.array(s.int()),
  mentionIds: s.array(s.string()),
  memberMentionIds: s.array(s.string()),
  name: s.string(),
  thumbnailUrl: s.nullable(s.string()),
  type: s.string(),
  size: s.nullable(s.int()),
  uploaderId: s.string(),
  contentType: s.nullable(s.string()),
  updatedAt: s.dateTime(),
  groupMentionIds: s.array(s.string()),
  id: s.int(),
  url: s.string(),
  createdAt: s.dateTime(),
  _keysMap: {
    entityType: "entity_type",
    storyIds: "story_ids",
    mentionIds: "mention_ids",
    memberMentionIds: "member_mention_ids",
    thumbnailUrl: "thumbnail_url",
    uploaderId: "uploader_id",
    contentType: "content_type",
    updatedAt: "updated_at",
    groupMentionIds: "group_mention_ids",
    createdAt: "created_at",
  },
});
