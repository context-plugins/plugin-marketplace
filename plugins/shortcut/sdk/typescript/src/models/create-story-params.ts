import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createLabelParamsInternalSchema,
  createLabelParamsSchema,
  type CreateLabelParams,
} from "./create-label-params.js";
import {
  createStoryCommentParamsInternalSchema,
  createStoryCommentParamsSchema,
  type CreateStoryCommentParams,
} from "./create-story-comment-params.js";
import { createStoryLinkParamsSchema, type CreateStoryLinkParams } from "./create-story-link-params.js";
import {
  createTaskParamsInternalSchema,
  createTaskParamsSchema,
  type CreateTaskParams,
} from "./create-task-params.js";
import { customFieldValueParamsSchema, type CustomFieldValueParams } from "./custom-field-value-params.js";
import { moveToSchema, type MoveTo } from "./move-to.js";
import { storyTypeSchema, type StoryType } from "./story-type.js";
import { subTaskInternalSchema, subTaskSchema, type SubTask } from "./unions/sub-task.js";

/** Request parameters for creating a story. */
export type CreateStoryParams = {
  /** The description of the story. */
  description?: string;
  /** Controls the story's archived state. */
  archived?: boolean;
  /** An array of story links attached to the story. */
  storyLinks?: CreateStoryLinkParams[];
  /** An array of labels attached to the story. */
  labels?: CreateLabelParams[];
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
  /**
   * Given this story was converted from a task in another story, this is the original task ID that
   * was converted to this story.
   */
  sourceTaskId?: number | null;
  /** A manual override for the time/date the Story was completed. */
  completedAtOverride?: Date;
  /** The name of the story. */
  name: string;
  /** An array of comments to add to the story. */
  comments?: CreateStoryCommentParams[];
  /** The ID of the epic the story belongs to. */
  epicId?: number | null;
  /**
   * The id of the story template used to create this story, if applicable. This is just an
   * association; no content from the story template is inherited by the story simply by setting
   * this field.
   */
  storyTemplateId?: string | null;
  /** An array of External Links associated with this story. */
  externalLinks?: string[];
  /**
   * An array of maps specifying sub-tasks to be associated with the created story. Each map can
   * either link to an existing story or create a new sub-task story to be linked to the created
   * story. Field only applicable when Sub-task feature is enabled.
   */
  subTasks?: SubTask[];
  /** The ID of the member that requested the story. */
  requestedById?: string;
  /** The ID of the iteration the story belongs to. */
  iterationId?: number | null;
  /** An array of tasks connected to the story. */
  tasks?: CreateTaskParams[];
  /** A manual override for the time/date the Story was started. */
  startedAtOverride?: Date;
  /** The id of the group to associate with this story. */
  groupId?: string | null;
  /** The ID of the workflow state the story will be in. */
  workflowStateId?: number;
  /** The time/date the Story was updated. */
  updatedAt?: Date;
  /** An array of UUIDs of the followers of this story. */
  followerIds?: string[];
  /** An array of UUIDs of the owners of this story. */
  ownerIds?: string[];
  /**
   * This field can be set to another unique ID. In the case that the Story has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
  /**
   * The ID of the parent story to associate with this story (making the created story a sub-task).
   * Field only applicable when Sub-task feature is enabled.
   */
  parentStoryId?: number | null;
  /** The numeric point estimate of the story. Can also be null, which means unestimated. */
  estimate?: number | null;
  /** The ID of the project the story belongs to. */
  projectId?: number | null;
  /** An array of IDs of linked files attached to the story. */
  linkedFileIds?: number[];
  /** The due date of the story. */
  deadline?: Date | null;
  /** The time/date the Story was created. */
  createdAt?: Date;
};

const createStoryParamsProperties: s.Shape<CreateStoryParams> = {
  description: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  storyLinks: s.optional(s.array(s.lazy(() => createStoryLinkParamsSchema))),
  labels: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  storyType: s.optional(s.lazy(() => storyTypeSchema)),
  customFields: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema))),
  moveTo: s.optional(s.lazy(() => moveToSchema)),
  fileIds: s.optional(s.array(s.int())),
  sourceTaskId: s.optionalNullable(s.int()),
  completedAtOverride: s.optional(s.dateTime()),
  name: s.string(),
  comments: s.optional(s.array(s.lazy(() => createStoryCommentParamsInternalSchema))),
  epicId: s.optionalNullable(s.int()),
  storyTemplateId: s.optionalNullable(s.string()),
  externalLinks: s.optional(s.array(s.string())),
  subTasks: s.optional(s.array(s.lazy(() => subTaskInternalSchema))),
  requestedById: s.optional(s.string()),
  iterationId: s.optionalNullable(s.int()),
  tasks: s.optional(s.array(s.lazy(() => createTaskParamsInternalSchema))),
  startedAtOverride: s.optional(s.dateTime()),
  groupId: s.optionalNullable(s.string()),
  workflowStateId: s.optional(s.int()),
  updatedAt: s.optional(s.dateTime()),
  followerIds: s.optional(s.array(s.string())),
  ownerIds: s.optional(s.array(s.string())),
  externalId: s.optional(s.string()),
  parentStoryId: s.optionalNullable(s.int()),
  estimate: s.optionalNullable(s.int()),
  projectId: s.optionalNullable(s.int()),
  linkedFileIds: s.optional(s.array(s.int())),
  deadline: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    storyLinks: "story_links",
    storyType: "story_type",
    customFields: "custom_fields",
    moveTo: "move_to",
    fileIds: "file_ids",
    sourceTaskId: "source_task_id",
    completedAtOverride: "completed_at_override",
    epicId: "epic_id",
    storyTemplateId: "story_template_id",
    externalLinks: "external_links",
    subTasks: "sub_tasks",
    requestedById: "requested_by_id",
    iterationId: "iteration_id",
    startedAtOverride: "started_at_override",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    updatedAt: "updated_at",
    followerIds: "follower_ids",
    ownerIds: "owner_ids",
    externalId: "external_id",
    parentStoryId: "parent_story_id",
    projectId: "project_id",
    linkedFileIds: "linked_file_ids",
    createdAt: "created_at",
  },
};

export const createStoryParamsInternalSchema: Schema<CreateStoryParams> =
  s.object<CreateStoryParams>(createStoryParamsProperties);

export const createStoryParamsSchema: Schema<CreateStoryParams> = s.lazySchema(() =>
  s.object<CreateStoryParams>({
    ...createStoryParamsProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    labels: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    fileIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    name: s.string().check(s.minLength(1), s.maxLength(512)),
    comments: s.optional(s.array(s.lazy(() => createStoryCommentParamsSchema))),
    subTasks: s.optional(s.array(s.lazy(() => subTaskSchema))),
    tasks: s.optional(s.array(s.lazy(() => createTaskParamsSchema))),
    followerIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
    ownerIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
    externalId: s.optional(s.string().check(s.maxLength(1024))),
    linkedFileIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
  }),
);
