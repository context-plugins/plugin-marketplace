import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { storyType6Schema, type StoryType6 } from "./story-type6.js";
import { workflowStateTypeSchema, type WorkflowStateType } from "./workflow-state-type.js";

export type SearchStories = {
  /** A true/false boolean indicating whether the Story is in archived state. */
  archived?: boolean;
  /** An array of UUIDs for any Users who may be Owners of the Stories. */
  ownerId?: string | null;
  /** The type of Stories that you want returned. */
  storyType?: StoryType6;
  /** The Epic IDs that may be associated with the Stories. */
  epicIds?: number[];
  /** The IDs for the Projects the Stories may be assigned to. */
  projectIds?: (number | null)[];
  /** Stories should have been updated on or before this date. */
  updatedAtEnd?: Date;
  /** Stories should have been completed on or before this date. */
  completedAtEnd?: Date;
  /** The type of Workflow State the Stories may be in. */
  workflowStateTypes?: WorkflowStateType[];
  /** Stories should have a deadline on or before this date. */
  deadlineEnd?: Date;
  /** Stories should have been created on or after this date. */
  createdAtStart?: Date;
  /** The Epic IDs that may be associated with the Stories. */
  epicId?: number | null;
  /** The name of any associated Labels. */
  labelName?: string;
  /** The UUID of any Users who may have requested the Stories. */
  requestedById?: string;
  /** The Iteration ID that may be associated with the Stories. */
  iterationId?: number | null;
  /** The Label IDs that may be associated with the Stories. */
  labelIds?: number[];
  /** The Group ID that is associated with the Stories */
  groupId?: string | null;
  /** The unique IDs of the specific Workflow States that the Stories should be in. */
  workflowStateId?: number;
  /** The Iteration IDs that may be associated with the Stories. */
  iterationIds?: number[];
  /** Stories should have been created on or before this date. */
  createdAtEnd?: Date;
  /** Stories should have a deadline on or after this date. */
  deadlineStart?: Date;
  /** The Group IDs that are associated with the Stories */
  groupIds?: string[];
  /** An array of UUIDs for any Users who may be Owners of the Stories. */
  ownerIds?: string[];
  /** An ID or URL that references an external resource. Useful during imports. */
  externalId?: string;
  /** Whether to include the story description in the response. */
  includesDescription?: boolean;
  /** The number of estimate points associate with the Stories. */
  estimate?: number;
  /** The IDs for the Projects the Stories may be assigned to. */
  projectId?: number | null;
  /** Stories should have been completed on or after this date. */
  completedAtStart?: Date;
  /** Stories should have been updated on or after this date. */
  updatedAtStart?: Date;
};

const searchStoriesProperties: s.Shape<SearchStories> = {
  archived: s.optional(s.boolean()),
  ownerId: s.optionalNullable(s.string()),
  storyType: s.optional(s.lazy(() => storyType6Schema)),
  epicIds: s.optional(s.array(s.int())),
  projectIds: s.optional(s.array(s.nullable(s.int()))),
  updatedAtEnd: s.optional(s.dateTime()),
  completedAtEnd: s.optional(s.dateTime()),
  workflowStateTypes: s.optional(s.array(s.lazy(() => workflowStateTypeSchema))),
  deadlineEnd: s.optional(s.dateTime()),
  createdAtStart: s.optional(s.dateTime()),
  epicId: s.optionalNullable(s.int()),
  labelName: s.optional(s.string()),
  requestedById: s.optional(s.string()),
  iterationId: s.optionalNullable(s.int()),
  labelIds: s.optional(s.array(s.int())),
  groupId: s.optionalNullable(s.string()),
  workflowStateId: s.optional(s.int()),
  iterationIds: s.optional(s.array(s.int())),
  createdAtEnd: s.optional(s.dateTime()),
  deadlineStart: s.optional(s.dateTime()),
  groupIds: s.optional(s.array(s.string())),
  ownerIds: s.optional(s.array(s.string())),
  externalId: s.optional(s.string()),
  includesDescription: s.optional(s.boolean()),
  estimate: s.optional(s.int()),
  projectId: s.optionalNullable(s.int()),
  completedAtStart: s.optional(s.dateTime()),
  updatedAtStart: s.optional(s.dateTime()),
  _keysMap: {
    ownerId: "owner_id",
    storyType: "story_type",
    epicIds: "epic_ids",
    projectIds: "project_ids",
    updatedAtEnd: "updated_at_end",
    completedAtEnd: "completed_at_end",
    workflowStateTypes: "workflow_state_types",
    deadlineEnd: "deadline_end",
    createdAtStart: "created_at_start",
    epicId: "epic_id",
    labelName: "label_name",
    requestedById: "requested_by_id",
    iterationId: "iteration_id",
    labelIds: "label_ids",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    iterationIds: "iteration_ids",
    createdAtEnd: "created_at_end",
    deadlineStart: "deadline_start",
    groupIds: "group_ids",
    ownerIds: "owner_ids",
    externalId: "external_id",
    includesDescription: "includes_description",
    projectId: "project_id",
    completedAtStart: "completed_at_start",
    updatedAtStart: "updated_at_start",
  },
};

export const searchStoriesInternalSchema: Schema<SearchStories> =
  s.object<SearchStories>(searchStoriesProperties);

export const searchStoriesSchema: Schema<SearchStories> = s.lazySchema(() =>
  s.object<SearchStories>({
    ...searchStoriesProperties,
    epicIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    projectIds: s.optional(s.array(s.nullable(s.int())).check(s.uniqueItems())),
    labelName: s.optional(s.string().check(s.minLength(1))),
    labelIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    iterationIds: s.optional(s.array(s.int()).check(s.uniqueItems())),
    groupIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
    ownerIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
    externalId: s.optional(s.string().check(s.maxLength(1024))),
  }),
);
