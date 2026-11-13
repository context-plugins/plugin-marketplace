import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  storyHistoryChangeAddsRemovesIntSchema,
  type StoryHistoryChangeAddsRemovesInt,
} from "./story-history-change-adds-removes-int.js";
import {
  storyHistoryChangeAddsRemovesUuidSchema,
  type StoryHistoryChangeAddsRemovesUuid,
} from "./story-history-change-adds-removes-uuid.js";
import {
  storyHistoryChangeOldNewBoolSchema,
  type StoryHistoryChangeOldNewBool,
} from "./story-history-change-old-new-bool.js";
import {
  storyHistoryChangeOldNewIntSchema,
  type StoryHistoryChangeOldNewInt,
} from "./story-history-change-old-new-int.js";
import {
  storyHistoryChangeOldNewStrSchema,
  type StoryHistoryChangeOldNewStr,
} from "./story-history-change-old-new-str.js";
import {
  storyHistoryChangeOldNewUuidSchema,
  type StoryHistoryChangeOldNewUuid,
} from "./story-history-change-old-new-uuid.js";

/** The changes that have occurred as a result of the action. */
export type HistoryChangesStory = {
  /** A timestamp that represents the Story's deadline. */
  description?: StoryHistoryChangeOldNewStr;
  /** True if the Story has archived, otherwise false. */
  archived?: StoryHistoryChangeOldNewBool;
  /** True if the Story has archived, otherwise false. */
  started?: StoryHistoryChangeOldNewBool;
  /** Task IDs that have been added or removed from the Story. */
  taskIds?: StoryHistoryChangeAddsRemovesInt;
  /** Custom Field Enum Value IDs that have been added or removed from the Story. */
  mentionIds?: StoryHistoryChangeAddsRemovesUuid;
  /** A timestamp that represents the Story's deadline. */
  storyType?: StoryHistoryChangeOldNewStr;
  /** A timestamp that represents the Story's deadline. */
  name?: StoryHistoryChangeOldNewStr;
  /** True if the Story has archived, otherwise false. */
  completed?: StoryHistoryChangeOldNewBool;
  /** True if the Story has archived, otherwise false. */
  blocker?: StoryHistoryChangeOldNewBool;
  /** The estimate value for the Story */
  epicId?: StoryHistoryChangeOldNewInt;
  /** Task IDs that have been added or removed from the Story. */
  branchIds?: StoryHistoryChangeAddsRemovesInt;
  /** Task IDs that have been added or removed from the Story. */
  commitIds?: StoryHistoryChangeAddsRemovesInt;
  /** The Team ID for the Story. */
  requestedById?: StoryHistoryChangeOldNewUuid;
  /** The estimate value for the Story */
  iterationId?: StoryHistoryChangeOldNewInt;
  /** Task IDs that have been added or removed from the Story. */
  labelIds?: StoryHistoryChangeAddsRemovesInt;
  /** The Team ID for the Story. */
  groupId?: StoryHistoryChangeOldNewUuid;
  /** The estimate value for the Story */
  workflowStateId?: StoryHistoryChangeOldNewInt;
  /** Task IDs that have been added or removed from the Story. */
  objectStoryLinkIds?: StoryHistoryChangeAddsRemovesInt;
  /** Custom Field Enum Value IDs that have been added or removed from the Story. */
  followerIds?: StoryHistoryChangeAddsRemovesUuid;
  /** Custom Field Enum Value IDs that have been added or removed from the Story. */
  ownerIds?: StoryHistoryChangeAddsRemovesUuid;
  /** Custom Field Enum Value IDs that have been added or removed from the Story. */
  customFieldValueIds?: StoryHistoryChangeAddsRemovesUuid;
  /** The estimate value for the Story */
  parentStoryId?: StoryHistoryChangeOldNewInt;
  /** The estimate value for the Story */
  estimate?: StoryHistoryChangeOldNewInt;
  /** Task IDs that have been added or removed from the Story. */
  subjectStoryLinkIds?: StoryHistoryChangeAddsRemovesInt;
  /** True if the Story has archived, otherwise false. */
  blocked?: StoryHistoryChangeOldNewBool;
  /** The estimate value for the Story */
  projectId?: StoryHistoryChangeOldNewInt;
  /** A timestamp that represents the Story's deadline. */
  deadline?: StoryHistoryChangeOldNewStr;
};

export const historyChangesStorySchema: Schema<HistoryChangesStory> = s.object<HistoryChangesStory>({
  description: s.optional(s.lazy(() => storyHistoryChangeOldNewStrSchema)),
  archived: s.optional(s.lazy(() => storyHistoryChangeOldNewBoolSchema)),
  started: s.optional(s.lazy(() => storyHistoryChangeOldNewBoolSchema)),
  taskIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesIntSchema)),
  mentionIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesUuidSchema)),
  storyType: s.optional(s.lazy(() => storyHistoryChangeOldNewStrSchema)),
  name: s.optional(s.lazy(() => storyHistoryChangeOldNewStrSchema)),
  completed: s.optional(s.lazy(() => storyHistoryChangeOldNewBoolSchema)),
  blocker: s.optional(s.lazy(() => storyHistoryChangeOldNewBoolSchema)),
  epicId: s.optional(s.lazy(() => storyHistoryChangeOldNewIntSchema)),
  branchIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesIntSchema)),
  commitIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesIntSchema)),
  requestedById: s.optional(s.lazy(() => storyHistoryChangeOldNewUuidSchema)),
  iterationId: s.optional(s.lazy(() => storyHistoryChangeOldNewIntSchema)),
  labelIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesIntSchema)),
  groupId: s.optional(s.lazy(() => storyHistoryChangeOldNewUuidSchema)),
  workflowStateId: s.optional(s.lazy(() => storyHistoryChangeOldNewIntSchema)),
  objectStoryLinkIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesIntSchema)),
  followerIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesUuidSchema)),
  ownerIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesUuidSchema)),
  customFieldValueIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesUuidSchema)),
  parentStoryId: s.optional(s.lazy(() => storyHistoryChangeOldNewIntSchema)),
  estimate: s.optional(s.lazy(() => storyHistoryChangeOldNewIntSchema)),
  subjectStoryLinkIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesIntSchema)),
  blocked: s.optional(s.lazy(() => storyHistoryChangeOldNewBoolSchema)),
  projectId: s.optional(s.lazy(() => storyHistoryChangeOldNewIntSchema)),
  deadline: s.optional(s.lazy(() => storyHistoryChangeOldNewStrSchema)),
  _keysMap: {
    taskIds: "task_ids",
    mentionIds: "mention_ids",
    storyType: "story_type",
    epicId: "epic_id",
    branchIds: "branch_ids",
    commitIds: "commit_ids",
    requestedById: "requested_by_id",
    iterationId: "iteration_id",
    labelIds: "label_ids",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    objectStoryLinkIds: "object_story_link_ids",
    followerIds: "follower_ids",
    ownerIds: "owner_ids",
    customFieldValueIds: "custom_field_value_ids",
    parentStoryId: "parent_story_id",
    subjectStoryLinkIds: "subject_story_link_ids",
    projectId: "project_id",
  },
});
