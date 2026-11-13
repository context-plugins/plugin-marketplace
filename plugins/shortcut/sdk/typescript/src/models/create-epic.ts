import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createLabelParamsInternalSchema,
  createLabelParamsSchema,
  type CreateLabelParams,
} from "./create-label-params.js";
import { sizeSchema, type Size } from "./size.js";
import { stateSchema, type State } from "./state.js";

export type CreateEpic = {
  /** The Epic's description. */
  description?: string;
  /** An array of Labels attached to the Epic. */
  labels?: CreateLabelParams[];
  /** A manual override for the time/date the Epic was completed. */
  completedAtOverride?: Date;
  /** An array of IDs for Objectives to which this Epic is related. */
  objectiveIds?: number[];
  /** The Epic's name. */
  name: string;
  /** The Epic's planned start date. */
  plannedStartDate?: Date | null;
  /**
   * `Deprecated` The Epic's state (to do, in progress, or done); will be ignored when
   * `epic_state_id` is set.
   */
  state?: State;
  /** `Deprecated` The ID of the Milestone this Epic is related to. Use `objective_ids`. */
  milestoneId?: number | null;
  /** The ID of the member that requested the epic. */
  requestedById?: string;
  /** The t-shirt size of the Epic for high-level effort estimation. */
  size?: Size | null;
  /** The ID of the Epic State. */
  epicStateId?: number;
  /** A manual override for the time/date the Epic was started. */
  startedAtOverride?: Date;
  /** `Deprecated` The ID of the group to associate with the epic. Use `group_ids`. */
  groupId?: string | null;
  /** Defaults to the time/date it is created but can be set to reflect another date. */
  updatedAt?: Date;
  /** An array of UUIDs for any Members you want to add as Followers on this new Epic. */
  followerIds?: string[];
  /** An array of UUIDS for Groups to which this Epic is related. */
  groupIds?: string[];
  /** The ID of the Story that was converted to an Epic. */
  convertedFromStoryId?: number | null;
  /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
  ownerIds?: string[];
  /**
   * This field can be set to another unique ID. In the case that the Epic has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
  /** The Epic's deadline. */
  deadline?: Date | null;
  /** Defaults to the time/date it is created but can be set to reflect another date. */
  createdAt?: Date;
};

const createEpicProperties: s.Shape<CreateEpic> = {
  description: s.optional(s.string()),
  labels: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  completedAtOverride: s.optional(s.dateTime()),
  objectiveIds: s.optional(s.array(s.int())),
  name: s.string(),
  plannedStartDate: s.optionalNullable(s.dateTime()),
  state: s.optional(s.lazy(() => stateSchema)),
  milestoneId: s.optionalNullable(s.int()),
  requestedById: s.optional(s.string()),
  size: s.optionalNullable(s.lazy(() => sizeSchema)),
  epicStateId: s.optional(s.int()),
  startedAtOverride: s.optional(s.dateTime()),
  groupId: s.optionalNullable(s.string()),
  updatedAt: s.optional(s.dateTime()),
  followerIds: s.optional(s.array(s.string())),
  groupIds: s.optional(s.array(s.string())),
  convertedFromStoryId: s.optionalNullable(s.int()),
  ownerIds: s.optional(s.array(s.string())),
  externalId: s.optional(s.string()),
  deadline: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    completedAtOverride: "completed_at_override",
    objectiveIds: "objective_ids",
    plannedStartDate: "planned_start_date",
    milestoneId: "milestone_id",
    requestedById: "requested_by_id",
    epicStateId: "epic_state_id",
    startedAtOverride: "started_at_override",
    groupId: "group_id",
    updatedAt: "updated_at",
    followerIds: "follower_ids",
    groupIds: "group_ids",
    convertedFromStoryId: "converted_from_story_id",
    ownerIds: "owner_ids",
    externalId: "external_id",
    createdAt: "created_at",
  },
};

export const createEpicInternalSchema: Schema<CreateEpic> = s.object<CreateEpic>(createEpicProperties);

export const createEpicSchema: Schema<CreateEpic> = s.lazySchema(() =>
  s.object<CreateEpic>({
    ...createEpicProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    labels: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    name: s.string().check(s.minLength(1), s.maxLength(256)),
    externalId: s.optional(s.string().check(s.maxLength(128))),
  }),
);
