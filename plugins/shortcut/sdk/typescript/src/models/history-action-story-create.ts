import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyType3Schema, type StoryType3 } from "./story-type3.js";

/** An action representing a Story being created. */
export type HistoryActionStoryCreate = {
  /** The application URL of the Story. */
  appUrl: string;
  /** The description of the Story. */
  description?: string;
  /** Whether or not the Story has been started. */
  started?: boolean;
  /** The type of entity referenced. */
  entityType: string;
  /** An array of Task IDs on this Story. */
  taskIds?: number[];
  /** The type of Story; either feature, bug, or chore. */
  storyType: StoryType3;
  /** The name of the Story. */
  name: string;
  /** Whether or not the Story is completed. */
  completed?: boolean;
  /** Whether or not the Story is blocking another Story. */
  blocker?: boolean;
  /** The Epic ID for this Story. */
  epicId?: number;
  /** The ID of the Member that requested the Story. */
  requestedById?: string;
  /** The Iteration ID the Story is in. */
  iterationId?: number | null;
  /** An array of Labels IDs attached to the Story. */
  labelIds?: number[];
  /** The Team IDs for the followers of the Story. */
  groupId?: string;
  /** An array of Workflow State IDs attached to the Story. */
  workflowStateId?: number;
  /** An array of Story IDs that are the object of a Story Link relationship. */
  objectStoryLinkIds?: number[];
  /** An array of Member IDs for the followers of the Story. */
  followerIds?: string[];
  /** An array of Member IDs that are the owners of the Story. */
  ownerIds?: string[];
  /** An array of Custom Field Enum Value ids on this Story. */
  customFieldValueIds?: string[];
  /** The ID of the entity referenced. */
  id: number;
  /** The Story's Parent ID (only applicable if Story is a Sub-task) */
  parentStoryId?: number;
  /** The estimate (or point value) for the Story. */
  estimate?: number;
  /** An array of Story IDs that are the subject of a Story Link relationship. */
  subjectStoryLinkIds?: number[];
  /** The action of the entity referenced. @default "create" */
  action?: "create";
  /** Whether or not the Story is blocked by another Story. */
  blocked?: boolean;
  /** The Project ID of the Story is in. */
  projectId?: number;
  /** The timestamp representing the Story's deadline. */
  deadline?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyActionStoryCreateProperties: s.Shape<HistoryActionStoryCreate> = {
  appUrl: s.string(),
  description: s.optional(s.string()),
  started: s.optional(s.boolean()),
  entityType: s.string(),
  taskIds: s.optional(s.array(s.int())),
  storyType: storyType3Schema,
  name: s.string(),
  completed: s.optional(s.boolean()),
  blocker: s.optional(s.boolean()),
  epicId: s.optional(s.int()),
  requestedById: s.optional(s.string()),
  iterationId: s.optionalNullable(s.int()),
  labelIds: s.optional(s.array(s.int())),
  groupId: s.optional(s.string()),
  workflowStateId: s.optional(s.int()),
  objectStoryLinkIds: s.optional(s.array(s.int())),
  followerIds: s.optional(s.array(s.string())),
  ownerIds: s.optional(s.array(s.string())),
  customFieldValueIds: s.optional(s.array(s.string())),
  id: s.int(),
  parentStoryId: s.optional(s.int()),
  estimate: s.optional(s.int()),
  subjectStoryLinkIds: s.optional(s.array(s.int())),
  action: s.defaulted(s.literal("create"), "create"),
  blocked: s.optional(s.boolean()),
  projectId: s.optional(s.int()),
  deadline: s.optional(s.string()),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    taskIds: "task_ids",
    storyType: "story_type",
    epicId: "epic_id",
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
};

export const historyActionStoryCreateInternalSchema: Schema<HistoryActionStoryCreate> =
  s.object<HistoryActionStoryCreate>(historyActionStoryCreateProperties, { additionalProperties: s.json() });

export const historyActionStoryCreateSchema: Schema<HistoryActionStoryCreate> = s.lazySchema(() =>
  s.object<HistoryActionStoryCreate>(
    {
      ...historyActionStoryCreateProperties,
      appUrl: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
