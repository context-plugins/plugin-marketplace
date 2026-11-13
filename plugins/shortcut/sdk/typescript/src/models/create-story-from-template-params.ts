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
import { removeCustomFieldParamsSchema, type RemoveCustomFieldParams } from "./remove-custom-field-params.js";
import {
  removeLabelParamsInternalSchema,
  removeLabelParamsSchema,
  type RemoveLabelParams,
} from "./remove-label-params.js";
import { storyTypeSchema, type StoryType } from "./story-type.js";
import { subTaskInternalSchema, subTaskSchema, type SubTask } from "./unions/sub-task.js";

/**
 * Request parameters for creating a story from a story template. These parameters are merged with
 * the values derived from the template.
 */
export type CreateStoryFromTemplateParams = {
  /** The description of the story. */
  description?: string;
  /** Controls the story's archived state. */
  archived?: boolean;
  /** An array of story links attached to the story. */
  storyLinks?: CreateStoryLinkParams[];
  /** An array of labels attached to the story. */
  labels?: CreateLabelParams[];
  /**
   * An array of External Links associated with this story. These will be added to any links
   * provided by the template. Cannot be used in conjunction with `external_links`.
   */
  externalLinksAdd?: string[];
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
  /** The name of the story. Must be provided if the template does not provide a name. */
  name?: string;
  /**
   * An array of IDs of files attached to the story in addition to files from the template. Cannot
   * be used in conjunction with `file_ids`.
   */
  fileIdsAdd?: number[];
  /**
   * An array of IDs of files removed from files from the template. Cannot be used in conjunction
   * with `file_ids`.
   */
  fileIdsRemove?: number[];
  /** An array of comments to add to the story. */
  comments?: CreateStoryCommentParams[];
  /**
   * The UUIDs of the new followers to be added in addition to followers from the template. Cannot
   * be used in conjunction with `follower_ids.`
   */
  followerIdsAdd?: string[];
  /** The ID of the epic the story belongs to. */
  epicId?: number | null;
  /** The id of the story template used to create this story. */
  storyTemplateId: string;
  /** An array of External Links associated with this story. */
  externalLinks?: string[];
  /**
   * The UUIDs of the new followers to be removed from followers from the template. Cannot be used
   * in conjunction with `follower_ids`.
   */
  followerIdsRemove?: string[];
  /**
   * An array of maps specifying sub-tasks to be associated with the created story. Each map can
   * either link to an existing story or create a new sub-task story to be linked to the created
   * story. Field only applicable when Sub-task feature is enabled.
   */
  subTasks?: SubTask[];
  /**
   * An array of IDs of linked files removed from files from the template. Cannot be used in
   * conjunction with `linked_files.`
   */
  linkedFileIdsRemove?: number[];
  /** The ID of the member that requested the story. */
  requestedById?: string;
  /** The ID of the iteration the story belongs to. */
  iterationId?: number | null;
  /**
   * A map specifying a CustomField ID. These will be removed from any fields provided by the
   * template. Cannot be used in conjunction with `custom_fields`.
   */
  customFieldsRemove?: RemoveCustomFieldParams[];
  /** An array of tasks connected to the story. */
  tasks?: CreateTaskParams[];
  /** A manual override for the time/date the Story was started. */
  startedAtOverride?: Date;
  /**
   * An array of labels attached to the story in addition to the labels provided by the template.
   * Cannot be used in conjunction with `labels`.
   */
  labelsAdd?: CreateLabelParams[];
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
  /**
   * The UUIDs of the new owners to be removed from owners from the template. Cannot be used in
   * conjunction with `owners`.
   */
  ownerIdsRemove?: string[];
  /**
   * A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of
   * some value for a CustomField. These will be added to any fields provided by the template.
   * Cannot be used in conjunction with `custom_fields`.
   */
  customFieldsAdd?: CustomFieldValueParams[];
  /** The ID of the project the story belongs to. */
  projectId?: number | null;
  /**
   * An array of IDs of linked files attached to the story in addition to files from the template.
   * Cannot be used in conjunction with `linked_files`.
   */
  linkedFileIdsAdd?: number[];
  /** An array of IDs of linked files attached to the story. */
  linkedFileIds?: number[];
  /**
   * An array of labels to remove from the labels provided by the template. Cannot be used in
   * conjunction with `labels`.
   */
  labelsRemove?: RemoveLabelParams[];
  /** The due date of the story. */
  deadline?: Date | null;
  /**
   * The UUIDs of the new owners to be added in addition to owners from the template. Cannot be used
   * in conjunction with `owners`.
   */
  ownerIdsAdd?: string[];
  /** The time/date the Story was created. */
  createdAt?: Date;
  /**
   * An array of External Links associated with this story. These will be removed from any links
   * provided by the template. Cannot be used in conjunction with `external_links`.
   */
  externalLinksRemove?: string[];
};

const createStoryFromTemplateParamsProperties: s.Shape<CreateStoryFromTemplateParams> = {
  description: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  storyLinks: s.optional(s.array(s.lazy(() => createStoryLinkParamsSchema))),
  labels: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  externalLinksAdd: s.optional(s.array(s.string())),
  storyType: s.optional(s.lazy(() => storyTypeSchema)),
  customFields: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema))),
  moveTo: s.optional(s.lazy(() => moveToSchema)),
  fileIds: s.optional(s.array(s.int())),
  sourceTaskId: s.optionalNullable(s.int()),
  completedAtOverride: s.optional(s.dateTime()),
  name: s.optional(s.string()),
  fileIdsAdd: s.optional(s.array(s.int())),
  fileIdsRemove: s.optional(s.array(s.int())),
  comments: s.optional(s.array(s.lazy(() => createStoryCommentParamsInternalSchema))),
  followerIdsAdd: s.optional(s.array(s.string())),
  epicId: s.optionalNullable(s.int()),
  storyTemplateId: s.string(),
  externalLinks: s.optional(s.array(s.string())),
  followerIdsRemove: s.optional(s.array(s.string())),
  subTasks: s.optional(s.array(s.lazy(() => subTaskInternalSchema))),
  linkedFileIdsRemove: s.optional(s.array(s.int())),
  requestedById: s.optional(s.string()),
  iterationId: s.optionalNullable(s.int()),
  customFieldsRemove: s.optional(s.array(s.lazy(() => removeCustomFieldParamsSchema))),
  tasks: s.optional(s.array(s.lazy(() => createTaskParamsInternalSchema))),
  startedAtOverride: s.optional(s.dateTime()),
  labelsAdd: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  groupId: s.optionalNullable(s.string()),
  workflowStateId: s.optional(s.int()),
  updatedAt: s.optional(s.dateTime()),
  followerIds: s.optional(s.array(s.string())),
  ownerIds: s.optional(s.array(s.string())),
  externalId: s.optional(s.string()),
  parentStoryId: s.optionalNullable(s.int()),
  estimate: s.optionalNullable(s.int()),
  ownerIdsRemove: s.optional(s.array(s.string())),
  customFieldsAdd: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema))),
  projectId: s.optionalNullable(s.int()),
  linkedFileIdsAdd: s.optional(s.array(s.int())),
  linkedFileIds: s.optional(s.array(s.int())),
  labelsRemove: s.optional(s.array(s.lazy(() => removeLabelParamsInternalSchema))),
  deadline: s.optionalNullable(s.dateTime()),
  ownerIdsAdd: s.optional(s.array(s.string())),
  createdAt: s.optional(s.dateTime()),
  externalLinksRemove: s.optional(s.array(s.string())),
  _keysMap: {
    storyLinks: "story_links",
    externalLinksAdd: "external_links_add",
    storyType: "story_type",
    customFields: "custom_fields",
    moveTo: "move_to",
    fileIds: "file_ids",
    sourceTaskId: "source_task_id",
    completedAtOverride: "completed_at_override",
    fileIdsAdd: "file_ids_add",
    fileIdsRemove: "file_ids_remove",
    followerIdsAdd: "follower_ids_add",
    epicId: "epic_id",
    storyTemplateId: "story_template_id",
    externalLinks: "external_links",
    followerIdsRemove: "follower_ids_remove",
    subTasks: "sub_tasks",
    linkedFileIdsRemove: "linked_file_ids_remove",
    requestedById: "requested_by_id",
    iterationId: "iteration_id",
    customFieldsRemove: "custom_fields_remove",
    startedAtOverride: "started_at_override",
    labelsAdd: "labels_add",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    updatedAt: "updated_at",
    followerIds: "follower_ids",
    ownerIds: "owner_ids",
    externalId: "external_id",
    parentStoryId: "parent_story_id",
    ownerIdsRemove: "owner_ids_remove",
    customFieldsAdd: "custom_fields_add",
    projectId: "project_id",
    linkedFileIdsAdd: "linked_file_ids_add",
    linkedFileIds: "linked_file_ids",
    labelsRemove: "labels_remove",
    ownerIdsAdd: "owner_ids_add",
    createdAt: "created_at",
    externalLinksRemove: "external_links_remove",
  },
};

export const createStoryFromTemplateParamsInternalSchema: Schema<CreateStoryFromTemplateParams> =
  s.object<CreateStoryFromTemplateParams>(createStoryFromTemplateParamsProperties);

export const createStoryFromTemplateParamsSchema: Schema<CreateStoryFromTemplateParams> = s.lazySchema(() =>
  s.object<CreateStoryFromTemplateParams>({
    ...createStoryFromTemplateParamsProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    labels: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    externalLinksAdd: s.optional(s.array(s.string()).check(s.uniqueItems())),
    fileIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(512))),
    fileIdsAdd: s.optional(s.array(s.int()).check(s.uniqueItems())),
    fileIdsRemove: s.optional(s.array(s.int()).check(s.uniqueItems())),
    comments: s.optional(s.array(s.lazy(() => createStoryCommentParamsSchema))),
    followerIdsAdd: s.optional(s.array(s.string()).check(s.uniqueItems())),
    followerIdsRemove: s.optional(s.array(s.string()).check(s.uniqueItems())),
    subTasks: s.optional(s.array(s.lazy(() => subTaskSchema))),
    linkedFileIdsRemove: s.optional(s.array(s.int()).check(s.uniqueItems())),
    customFieldsRemove: s.optional(
      s.array(s.lazy(() => removeCustomFieldParamsSchema)).check(s.uniqueItems()),
    ),
    tasks: s.optional(s.array(s.lazy(() => createTaskParamsSchema))),
    labelsAdd: s.optional(s.array(s.lazy(() => createLabelParamsSchema)).check(s.uniqueItems())),
    followerIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
    ownerIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
    externalId: s.optional(s.string().check(s.maxLength(1024))),
    ownerIdsRemove: s.optional(s.array(s.string()).check(s.uniqueItems())),
    customFieldsAdd: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema)).check(s.uniqueItems())),
    linkedFileIdsAdd: s.optional(s.array(s.int()).check(s.uniqueItems())),
    linkedFileIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    labelsRemove: s.optional(s.array(s.lazy(() => removeLabelParamsSchema)).check(s.uniqueItems())),
    ownerIdsAdd: s.optional(s.array(s.string()).check(s.uniqueItems())),
    externalLinksRemove: s.optional(s.array(s.string()).check(s.uniqueItems())),
  }),
);
