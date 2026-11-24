import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  baseTaskParamsInternalSchema,
  baseTaskParamsSchema,
  type BaseTaskParams,
} from "./base-task-params.js";
import {
  createLabelParamsInternalSchema,
  createLabelParamsSchema,
  type CreateLabelParams,
} from "./create-label-params.js";
import {
  createSubTaskParamsInternalSchema,
  createSubTaskParamsSchema,
  type CreateSubTaskParams,
} from "./create-sub-task-params.js";
import { customFieldValueParamsSchema, type CustomFieldValueParams } from "./custom-field-value-params.js";

/** A map of story attributes this template populates. */
export type CreateStoryContents = {
  /** The description of the story. */
  description?: string;
  /** An array of labels to be populated by the template. */
  labels?: CreateLabelParams[];
  /** The type of story (feature, bug, chore). */
  storyType?: string;
  /**
   * An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an
   * assertion of some value for a CustomField.
   */
  customFields?: CustomFieldValueParams[];
  /** An array of the attached file IDs to be populated. */
  fileIds?: number[];
  /** The name of the story. */
  name?: string;
  /** The ID of the epic the to be populated. */
  epicId?: number | null;
  /** An array of external links to be populated. */
  externalLinks?: string[];
  /**
   * An array of maps specifying the sub-tasks to create and link to the story. Field only
   * applicable when Sub-task feature is enabled.
   */
  subTasks?: CreateSubTaskParams[];
  /** The ID of the iteration the to be populated. */
  iterationId?: number | null;
  /** An array of tasks to be populated by the template. */
  tasks?: BaseTaskParams[];
  /** The ID of the group to be populated. */
  groupId?: string | null;
  /** The ID of the workflow state to be populated. */
  workflowStateId?: number | null;
  /** An array of UUIDs for any Members listed as Followers. */
  followerIds?: string[];
  /** An array of UUIDs of the owners of this story. */
  ownerIds?: string[];
  /** The numeric point estimate to be populated. */
  estimate?: number | null;
  /** The ID of the project the story belongs to. */
  projectId?: number;
  /** An array of the linked file IDs to be populated. */
  linkedFileIds?: number[];
  /** The due date of the story. */
  deadline?: Date | null;
};

const createStoryContentsProperties: s.Shape<CreateStoryContents> = {
  description: s.optional(s.string()),
  labels: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  storyType: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema))),
  fileIds: s.optional(s.array(s.int())),
  name: s.optional(s.string()),
  epicId: s.optionalNullable(s.int()),
  externalLinks: s.optional(s.array(s.string())),
  subTasks: s.optional(s.array(s.lazy(() => createSubTaskParamsInternalSchema))),
  iterationId: s.optionalNullable(s.int()),
  tasks: s.optional(s.array(s.lazy(() => baseTaskParamsInternalSchema))),
  groupId: s.optionalNullable(s.string()),
  workflowStateId: s.optionalNullable(s.int()),
  followerIds: s.optional(s.array(s.string())),
  ownerIds: s.optional(s.array(s.string())),
  estimate: s.optionalNullable(s.int()),
  projectId: s.optional(s.int()),
  linkedFileIds: s.optional(s.array(s.int())),
  deadline: s.optionalNullable(s.dateTime()),
  _keysMap: {
    storyType: "story_type",
    customFields: "custom_fields",
    fileIds: "file_ids",
    epicId: "epic_id",
    externalLinks: "external_links",
    subTasks: "sub_tasks",
    iterationId: "iteration_id",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    followerIds: "follower_ids",
    ownerIds: "owner_ids",
    projectId: "project_id",
    linkedFileIds: "linked_file_ids",
  },
};

export const createStoryContentsInternalSchema: Schema<CreateStoryContents> = s.object<CreateStoryContents>(
  createStoryContentsProperties,
);

export const createStoryContentsSchema: Schema<CreateStoryContents> = s.lazySchema(() =>
  s.object<CreateStoryContents>({
    ...createStoryContentsProperties,
    labels: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    fileIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    name: s.optional(s.string().check(s.maxLength(512))),
    subTasks: s.optional(s.array(s.lazy(() => createSubTaskParamsSchema))),
    tasks: s.optional(s.array(s.lazy(() => baseTaskParamsSchema))),
    linkedFileIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
  }),
);
