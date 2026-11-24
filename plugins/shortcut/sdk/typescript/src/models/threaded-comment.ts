import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Comments associated with Epic Discussions. */
export type ThreadedComment = {
  /** The Shortcut application url for the Comment. */
  appUrl: string;
  /** A string description of this resource. */
  entityType: string;
  /** True/false boolean indicating whether the Comment is deleted. */
  deleted: boolean;
  /** `Deprecated:` use `member_mention_ids`. */
  mentionIds: string[];
  /** The unique ID of the Member that authored the Comment. */
  authorId: string;
  /** An array of Member IDs that have been mentioned in this Comment. */
  memberMentionIds: string[];
  /** A nested array of threaded comments. */
  comments: ThreadedComment[];
  /** The time/date the Comment was updated. */
  updatedAt: Date;
  /** An array of Group IDs that have been mentioned in this Comment. */
  groupMentionIds: string[];
  /**
   * This field can be set to another unique ID. In the case that the Comment has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The unique ID of the Comment. */
  id: number;
  /** The time/date the Comment was created. */
  createdAt: Date;
  /** The text of the Comment. */
  text: string;
};

export const threadedCommentSchema: Schema<ThreadedComment> = s.object<ThreadedComment>({
  appUrl: s.string(),
  entityType: s.string(),
  deleted: s.boolean(),
  mentionIds: s.array(s.string()),
  authorId: s.string(),
  memberMentionIds: s.array(s.string()),
  comments: s.array(s.lazy(() => threadedCommentSchema)),
  updatedAt: s.dateTime(),
  groupMentionIds: s.array(s.string()),
  externalId: s.nullable(s.string()),
  id: s.int(),
  createdAt: s.dateTime(),
  text: s.string(),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    mentionIds: "mention_ids",
    authorId: "author_id",
    memberMentionIds: "member_mention_ids",
    updatedAt: "updated_at",
    groupMentionIds: "group_mention_ids",
    externalId: "external_id",
    createdAt: "created_at",
  },
});
