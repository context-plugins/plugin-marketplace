import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createLabelParamsInternalSchema,
  createLabelParamsSchema,
  type CreateLabelParams,
} from "./create-label-params.js";
import { customFieldValueParamsSchema, type CustomFieldValueParams } from "./custom-field-value-params.js";
import { linkSubTaskParamsSchema, type LinkSubTaskParams } from "./link-sub-task-params.js";
import { moveToSchema, type MoveTo } from "./move-to.js";
import { storyTypeSchema, type StoryType } from "./story-type.js";

export type UpdateStory = {
  /** The description of the story. */
  description?: string;
  /** True if the story is archived, otherwise false. */
  archived?: boolean;
  /** An array of labels attached to the story. */
  labels?: CreateLabelParams[];
  /** An array of IDs of Pull/Merge Requests attached to the story. */
  pullRequestIds?: number[];
  /** The type of story (feature, bug, chore). */
  storyType?: StoryType;
  /**
   * A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of
   * some value for a CustomField.
   */
  customFields?: CustomFieldValueParams[];
  /**
   * One of "first" or "last". This can be used to move the given story to the first or last
   * position in the workflow state.
   */
  moveTo?: MoveTo;
  /** An array of IDs of files attached to the story. */
  fileIds?: number[];
  /** A manual override for the time/date the Story was completed. */
  completedAtOverride?: Date | null;
  /** The title of the story. */
  name?: string;
  /** The ID of the epic the story belongs to. */
  epicId?: number | null;
  /** An array of External Links associated with this story. */
  externalLinks?: string[];
  /** An array of IDs of Branches attached to the story. */
  branchIds?: number[];
  /** An array of IDs of Commits attached to the story. */
  commitIds?: number[];
  /**
   * An array of story IDs to attach to this story as sub-tasks. This list represents the final
   * state of the parent's sub-tasks - missing stories will be unlinked, new stories will be linked,
   * and the input order reflects sub-task positions.
   */
  subTasks?: LinkSubTaskParams[];
  /** The ID of the member that requested the story. */
  requestedById?: string;
  /** The ID of the iteration the story belongs to. */
  iterationId?: number | null;
  /** A manual override for the time/date the Story was started. */
  startedAtOverride?: Date | null;
  /** The ID of the group to associate with this story */
  groupId?: string | null;
  /** The ID of the workflow state to put the story in. */
  workflowStateId?: number;
  /** An array of UUIDs of the followers of this story. */
  followerIds?: string[];
  /** An array of UUIDs of the owners of this story. */
  ownerIds?: string[];
  /** The parent story id. If you want to unset this value set parent_story_id to null. */
  parentStoryId?: number | null;
  /** The ID of the story we want to move this story before. */
  beforeId?: number;
  /** The numeric point estimate of the story. Can also be null, which means unestimated. */
  estimate?: number | null;
  /** The ID of the story we want to move this story after. */
  afterId?: number;
  /** The ID of the project the story belongs to. */
  projectId?: number | null;
  /** An array of IDs of linked files attached to the story. */
  linkedFileIds?: number[];
  /** The due date of the story. */
  deadline?: Date | null;
};

const updateStoryProperties: s.Shape<UpdateStory> = {
  description: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  labels: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  pullRequestIds: s.optional(s.array(s.int())),
  storyType: s.optional(s.lazy(() => storyTypeSchema)),
  customFields: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema))),
  moveTo: s.optional(s.lazy(() => moveToSchema)),
  fileIds: s.optional(s.array(s.int())),
  completedAtOverride: s.optionalNullable(s.dateTime()),
  name: s.optional(s.string()),
  epicId: s.optionalNullable(s.int()),
  externalLinks: s.optional(s.array(s.string())),
  branchIds: s.optional(s.array(s.int())),
  commitIds: s.optional(s.array(s.int())),
  subTasks: s.optional(s.array(s.lazy(() => linkSubTaskParamsSchema))),
  requestedById: s.optional(s.string()),
  iterationId: s.optionalNullable(s.int()),
  startedAtOverride: s.optionalNullable(s.dateTime()),
  groupId: s.optionalNullable(s.string()),
  workflowStateId: s.optional(s.int()),
  followerIds: s.optional(s.array(s.string())),
  ownerIds: s.optional(s.array(s.string())),
  parentStoryId: s.optionalNullable(s.int()),
  beforeId: s.optional(s.int()),
  estimate: s.optionalNullable(s.int()),
  afterId: s.optional(s.int()),
  projectId: s.optionalNullable(s.int()),
  linkedFileIds: s.optional(s.array(s.int())),
  deadline: s.optionalNullable(s.dateTime()),
  _keysMap: {
    pullRequestIds: "pull_request_ids",
    storyType: "story_type",
    customFields: "custom_fields",
    moveTo: "move_to",
    fileIds: "file_ids",
    completedAtOverride: "completed_at_override",
    epicId: "epic_id",
    externalLinks: "external_links",
    branchIds: "branch_ids",
    commitIds: "commit_ids",
    subTasks: "sub_tasks",
    requestedById: "requested_by_id",
    iterationId: "iteration_id",
    startedAtOverride: "started_at_override",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    followerIds: "follower_ids",
    ownerIds: "owner_ids",
    parentStoryId: "parent_story_id",
    beforeId: "before_id",
    afterId: "after_id",
    projectId: "project_id",
    linkedFileIds: "linked_file_ids",
  },
};

export const updateStoryInternalSchema: Schema<UpdateStory> = s.object<UpdateStory>(updateStoryProperties);

export const updateStorySchema: Schema<UpdateStory> = s.lazySchema(() =>
  s.object<UpdateStory>({
    ...updateStoryProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    labels: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    pullRequestIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    fileIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(512))),
    branchIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    commitIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    followerIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
    ownerIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
    linkedFileIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
  }),
);
