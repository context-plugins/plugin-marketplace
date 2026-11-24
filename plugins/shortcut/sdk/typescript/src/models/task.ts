import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A Task on a Story. */
export type Task = {
  /** Full text of the Task. */
  description: string;
  /** A string description of this resource. */
  entityType: string;
  /** The unique identifier of the parent Story. */
  storyId: number;
  /** `Deprecated:` use `member_mention_ids`. */
  mentionIds: string[];
  /** An array of UUIDs of Members mentioned in this Task. */
  memberMentionIds: string[];
  /** The time/date the Task was completed. */
  completedAt: Date | null;
  globalId: string;
  /** The time/date the Task was updated. */
  updatedAt: Date | null;
  /** An array of UUIDs of Groups mentioned in this Task. */
  groupMentionIds: string[];
  /** An array of UUIDs of the Owners of this Task. */
  ownerIds: string[];
  /**
   * This field can be set to another unique ID. In the case that the Task has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The unique ID of the Task. */
  id: number;
  /** The number corresponding to the Task's position within a list of Tasks on a Story. */
  position: number;
  /** True/false boolean indicating whether the Task has been completed. */
  complete: boolean;
  /** The time/date the Task was created. */
  createdAt: Date;
};

export const taskSchema: Schema<Task> = s.object<Task>({
  description: s.string(),
  entityType: s.string(),
  storyId: s.int(),
  mentionIds: s.array(s.string()),
  memberMentionIds: s.array(s.string()),
  completedAt: s.nullable(s.dateTime()),
  globalId: s.string(),
  updatedAt: s.nullable(s.dateTime()),
  groupMentionIds: s.array(s.string()),
  ownerIds: s.array(s.string()),
  externalId: s.nullable(s.string()),
  id: s.int(),
  position: s.int(),
  complete: s.boolean(),
  createdAt: s.dateTime(),
  _keysMap: {
    entityType: "entity_type",
    storyId: "story_id",
    mentionIds: "mention_ids",
    memberMentionIds: "member_mention_ids",
    completedAt: "completed_at",
    globalId: "global_id",
    updatedAt: "updated_at",
    groupMentionIds: "group_mention_ids",
    ownerIds: "owner_ids",
    externalId: "external_id",
    createdAt: "created_at",
  },
});
