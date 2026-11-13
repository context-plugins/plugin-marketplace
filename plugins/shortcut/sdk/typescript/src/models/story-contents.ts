import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createSubTaskParamsInternalSchema,
  createSubTaskParamsSchema,
  type CreateSubTaskParams,
} from "./create-sub-task-params.js";
import { customFieldValueParamsSchema, type CustomFieldValueParams } from "./custom-field-value-params.js";
import { labelSlimInternalSchema, labelSlimSchema, type LabelSlim } from "./label-slim.js";
import { linkedFileSchema, type LinkedFile } from "./linked-file.js";
import { storyContentsTaskSchema, type StoryContentsTask } from "./story-contents-task.js";
import { uploadedFileSchema, type UploadedFile } from "./uploaded-file.js";

/** A container entity for the attributes this template should populate. */
export type StoryContents = {
  /** The description of the story. */
  description?: string;
  /** A string description of this resource. */
  entityType?: string;
  /** An array of labels attached to the story. */
  labels?: LabelSlim[];
  /** The type of story (feature, bug, chore). */
  storyType?: string;
  /**
   * An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an
   * assertion of some value for a CustomField.
   */
  customFields?: CustomFieldValueParams[];
  /** An array of linked files attached to the story. */
  linkedFiles?: LinkedFile[];
  /** The name of the story. */
  name?: string;
  /** The ID of the epic the story belongs to. */
  epicId?: number;
  /** An array of external links connected to the story. */
  externalLinks?: string[];
  /**
   * An array of maps specifying the sub-tasks to create and link to the story. Field only
   * applicable when Sub-task feature is enabled.
   */
  subTasks?: CreateSubTaskParams[];
  /** The ID of the iteration the story belongs to. */
  iterationId?: number;
  /** An array of tasks connected to the story. */
  tasks?: StoryContentsTask[];
  /** An array of label ids attached to the story. */
  labelIds?: number[];
  /** The ID of the group to which the story is assigned. */
  groupId?: string;
  /** The ID of the workflow state the story is currently in. */
  workflowStateId?: number;
  /** An array of UUIDs for any Members listed as Followers. */
  followerIds?: string[];
  /** An array of UUIDs of the owners of this story. */
  ownerIds?: string[];
  /** The numeric point estimate of the story. Can also be null, which means unestimated. */
  estimate?: number;
  /** An array of files attached to the story. */
  files?: UploadedFile[];
  /** The ID of the project the story belongs to. */
  projectId?: number;
  /** The due date of the story. */
  deadline?: Date;
};

const storyContentsProperties: s.Shape<StoryContents> = {
  description: s.optional(s.string()),
  entityType: s.optional(s.string()),
  labels: s.optional(s.array(s.lazy(() => labelSlimInternalSchema))),
  storyType: s.optional(s.string()),
  customFields: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema))),
  linkedFiles: s.optional(s.array(s.lazy(() => linkedFileSchema))),
  name: s.optional(s.string()),
  epicId: s.optional(s.int()),
  externalLinks: s.optional(s.array(s.string())),
  subTasks: s.optional(s.array(s.lazy(() => createSubTaskParamsInternalSchema))),
  iterationId: s.optional(s.int()),
  tasks: s.optional(s.array(s.lazy(() => storyContentsTaskSchema))),
  labelIds: s.optional(s.array(s.int())),
  groupId: s.optional(s.string()),
  workflowStateId: s.optional(s.int()),
  followerIds: s.optional(s.array(s.string())),
  ownerIds: s.optional(s.array(s.string())),
  estimate: s.optional(s.int()),
  files: s.optional(s.array(s.lazy(() => uploadedFileSchema))),
  projectId: s.optional(s.int()),
  deadline: s.optional(s.dateTime()),
  _keysMap: {
    entityType: "entity_type",
    storyType: "story_type",
    customFields: "custom_fields",
    linkedFiles: "linked_files",
    epicId: "epic_id",
    externalLinks: "external_links",
    subTasks: "sub_tasks",
    iterationId: "iteration_id",
    labelIds: "label_ids",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    followerIds: "follower_ids",
    ownerIds: "owner_ids",
    projectId: "project_id",
  },
};

export const storyContentsInternalSchema: Schema<StoryContents> =
  s.object<StoryContents>(storyContentsProperties);

export const storyContentsSchema: Schema<StoryContents> = s.lazySchema(() =>
  s.object<StoryContents>({
    ...storyContentsProperties,
    labels: s.optional(s.array(s.lazy(() => labelSlimSchema))),
    subTasks: s.optional(s.array(s.lazy(() => createSubTaskParamsSchema))),
  }),
);
