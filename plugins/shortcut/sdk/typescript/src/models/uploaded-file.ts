import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a
 * third-party service are different: see the Linked Files endpoint.
 */
export type UploadedFile = {
  /** The description of the file. */
  description: string | null;
  /** A string description of this resource. */
  entityType: string;
  /** The unique IDs of the Stories associated with this file. */
  storyIds: number[];
  /** `Deprecated:` use `member_mention_ids`. */
  mentionIds: string[];
  /** The unique IDs of the Members who are mentioned in the file description. */
  memberMentionIds: string[];
  /** The optional User-specified name of the file. */
  name: string;
  /** The url where the thumbnail of the file can be found in Shortcut. */
  thumbnailUrl: string | null;
  /** The size of the file. */
  size: number;
  /** The unique ID of the Member who uploaded the file. */
  uploaderId: string;
  /** Free form string corresponding to a text or image file. */
  contentType: string;
  /** The time/date that the file was updated. */
  updatedAt: Date | null;
  /** The name assigned to the file in Shortcut upon upload. */
  filename: string;
  /** The unique IDs of the Groups who are mentioned in the file description. */
  groupMentionIds: string[];
  /**
   * This field can be set to another unique ID. In the case that the File has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The unique ID for the file. */
  id: number;
  /** The URL for the file. */
  url: string | null;
  /** The time/date that the file was created. */
  createdAt: Date;
};

export const uploadedFileSchema: Schema<UploadedFile> = s.object<UploadedFile>({
  description: s.nullable(s.string()),
  entityType: s.string(),
  storyIds: s.array(s.int()),
  mentionIds: s.array(s.string()),
  memberMentionIds: s.array(s.string()),
  name: s.string(),
  thumbnailUrl: s.nullable(s.string()),
  size: s.int(),
  uploaderId: s.string(),
  contentType: s.string(),
  updatedAt: s.nullable(s.dateTime()),
  filename: s.string(),
  groupMentionIds: s.array(s.string()),
  externalId: s.nullable(s.string()),
  id: s.int(),
  url: s.nullable(s.string()),
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
    externalId: "external_id",
    createdAt: "created_at",
  },
});
