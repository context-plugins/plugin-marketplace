import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createLabelParamsInternalSchema,
  createLabelParamsSchema,
  type CreateLabelParams,
} from "./create-label-params.js";
import { customFieldValueParamsSchema, type CustomFieldValueParams } from "./custom-field-value-params.js";
import { moveToSchema, type MoveTo } from "./move-to.js";
import { storyTypeSchema, type StoryType } from "./story-type.js";

export type UpdateStories = {
  /** If the Stories should be archived or not. */
  archived?: boolean;
  /** The Ids of the Stories you wish to update. */
  storyIds: number[];
  /** The type of story (feature, bug, chore). */
  storyType?: StoryType;
  /**
   * One of "first" or "last". This can be used to move the given story to the first or last
   * position in the workflow state.
   */
  moveTo?: MoveTo;
  /** The UUIDs of the new followers to be added. */
  followerIdsAdd?: string[];
  /** The ID of the epic the story belongs to. */
  epicId?: number | null;
  /** An array of External Links associated with this story. */
  externalLinks?: string[];
  /** The UUIDs of the followers to be removed. */
  followerIdsRemove?: string[];
  /** The ID of the member that requested the story. */
  requestedById?: string;
  /** The ID of the iteration the story belongs to. */
  iterationId?: number | null;
  /**
   * A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of
   * some value for a CustomField.
   */
  customFieldsRemove?: CustomFieldValueParams[];
  /** An array of labels to be added. */
  labelsAdd?: CreateLabelParams[];
  /** The Id of the Group the Stories should belong to. */
  groupId?: string | null;
  /** The ID of the workflow state to put the stories in. */
  workflowStateId?: number;
  /** The ID of the story that the stories are to be moved before. */
  beforeId?: number;
  /** The numeric point estimate of the story. Can also be null, which means unestimated. */
  estimate?: number | null;
  /** The ID of the story that the stories are to be moved below. */
  afterId?: number;
  /** The UUIDs of the owners to be removed. */
  ownerIdsRemove?: string[];
  /**
   * A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of
   * some value for a CustomField.
   */
  customFieldsAdd?: CustomFieldValueParams[];
  /** The ID of the Project the Stories should belong to. */
  projectId?: number | null;
  /** An array of labels to be removed. */
  labelsRemove?: CreateLabelParams[];
  /** The due date of the story. */
  deadline?: Date | null;
  /** The UUIDs of the new owners to be added. */
  ownerIdsAdd?: string[];
};

const updateStoriesProperties: s.Shape<UpdateStories> = {
  archived: s.optional(s.boolean()),
  storyIds: s.array(s.int()),
  storyType: s.optional(s.lazy(() => storyTypeSchema)),
  moveTo: s.optional(s.lazy(() => moveToSchema)),
  followerIdsAdd: s.optional(s.array(s.string())),
  epicId: s.optionalNullable(s.int()),
  externalLinks: s.optional(s.array(s.string())),
  followerIdsRemove: s.optional(s.array(s.string())),
  requestedById: s.optional(s.string()),
  iterationId: s.optionalNullable(s.int()),
  customFieldsRemove: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema))),
  labelsAdd: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  groupId: s.optionalNullable(s.string()),
  workflowStateId: s.optional(s.int()),
  beforeId: s.optional(s.int()),
  estimate: s.optionalNullable(s.int()),
  afterId: s.optional(s.int()),
  ownerIdsRemove: s.optional(s.array(s.string())),
  customFieldsAdd: s.optional(s.array(s.lazy(() => customFieldValueParamsSchema))),
  projectId: s.optionalNullable(s.int()),
  labelsRemove: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  deadline: s.optionalNullable(s.dateTime()),
  ownerIdsAdd: s.optional(s.array(s.string())),
  _keysMap: {
    storyIds: "story_ids",
    storyType: "story_type",
    moveTo: "move_to",
    followerIdsAdd: "follower_ids_add",
    epicId: "epic_id",
    externalLinks: "external_links",
    followerIdsRemove: "follower_ids_remove",
    requestedById: "requested_by_id",
    iterationId: "iteration_id",
    customFieldsRemove: "custom_fields_remove",
    labelsAdd: "labels_add",
    groupId: "group_id",
    workflowStateId: "workflow_state_id",
    beforeId: "before_id",
    afterId: "after_id",
    ownerIdsRemove: "owner_ids_remove",
    customFieldsAdd: "custom_fields_add",
    projectId: "project_id",
    labelsRemove: "labels_remove",
    ownerIdsAdd: "owner_ids_add",
  },
};

export const updateStoriesInternalSchema: Schema<UpdateStories> =
  s.object<UpdateStories>(updateStoriesProperties);

export const updateStoriesSchema: Schema<UpdateStories> = s.lazySchema(() =>
  s.object<UpdateStories>({
    ...updateStoriesProperties,
    storyIds: s.array(s.int()).check(s.uniqueItems()),
    followerIdsAdd: s.optional(s.array(s.string()).check(s.uniqueItems())),
    followerIdsRemove: s.optional(s.array(s.string()).check(s.uniqueItems())),
    labelsAdd: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    ownerIdsRemove: s.optional(s.array(s.string()).check(s.uniqueItems())),
    labelsRemove: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    ownerIdsAdd: s.optional(s.array(s.string()).check(s.uniqueItems())),
  }),
);
