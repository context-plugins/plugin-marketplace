import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { storyReactionSchema, type StoryReaction } from "./story-reaction.js";

/** A Comment is any note added within the Comment field of a Story. */
export type StoryComment = {
  /** The Shortcut application url for the Comment. */
  appUrl: string;
  /** A string description of this resource. */
  entityType: string;
  /** True/false boolean indicating whether the Comment has been deleted. */
  deleted: boolean;
  /** The ID of the Story on which the Comment appears. */
  storyId: number;
  /** `Deprecated:` use `member_mention_ids`. */
  mentionIds: string[];
  /** The unique ID of the Member who is the Comment's author. */
  authorId: string | null;
  /** The unique IDs of the Member who are mentioned in the Comment. */
  memberMentionIds: string[];
  /**
   * Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the
   * comment. Can only be used on a top-level comment.
   */
  blocker?: boolean;
  /** Whether the Comment is currently the root of a thread that is linked to Slack. */
  linkedToSlack: boolean;
  /** The time/date when the Comment was updated. */
  updatedAt: Date | null;
  /** The unique IDs of the Group who are mentioned in the Comment. */
  groupMentionIds: string[];
  /**
   * This field can be set to another unique ID. In the case that the Comment has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The ID of the parent Comment this Comment is threaded under. */
  parentId?: number | null;
  /** The unique ID of the Comment. */
  id: number;
  /** The Comments numerical position in the list from oldest to newest. */
  position: number;
  /**
   * Marks the comment as an unblocker to its blocker parent. Can only be set on a threaded comment
   * who has a parent with `blocker` set.
   */
  unblocksParent?: boolean;
  /** A set of Reactions to this Comment. */
  reactions: StoryReaction[];
  /** The time/date when the Comment was created. */
  createdAt: Date;
  /**
   * The text of the Comment. In the case that the Comment has been deleted, this field can be set
   * to nil.
   */
  text: string | null;
};

export const storyCommentSchema: Schema<StoryComment> = s.object<StoryComment>({
  appUrl: s.string(),
  entityType: s.string(),
  deleted: s.boolean(),
  storyId: s.int(),
  mentionIds: s.array(s.string()),
  authorId: s.nullable(s.string()),
  memberMentionIds: s.array(s.string()),
  blocker: s.optional(s.boolean()),
  linkedToSlack: s.boolean(),
  updatedAt: s.nullable(s.dateTime()),
  groupMentionIds: s.array(s.string()),
  externalId: s.nullable(s.string()),
  parentId: s.optionalNullable(s.int()),
  id: s.int(),
  position: s.int(),
  unblocksParent: s.optional(s.boolean()),
  reactions: s.array(s.lazy(() => storyReactionSchema)),
  createdAt: s.dateTime(),
  text: s.nullable(s.string()),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    storyId: "story_id",
    mentionIds: "mention_ids",
    authorId: "author_id",
    memberMentionIds: "member_mention_ids",
    linkedToSlack: "linked_to_slack",
    updatedAt: "updated_at",
    groupMentionIds: "group_mention_ids",
    externalId: "external_id",
    parentId: "parent_id",
    unblocksParent: "unblocks_parent",
    createdAt: "created_at",
  },
});
