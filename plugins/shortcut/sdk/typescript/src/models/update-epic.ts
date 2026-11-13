import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createLabelParamsInternalSchema,
  createLabelParamsSchema,
  type CreateLabelParams,
} from "./create-label-params.js";
import { sizeSchema, type Size } from "./size.js";
import { stateSchema, type State } from "./state.js";

export type UpdateEpic = {
  /** The Epic's description. */
  description?: string;
  /** A true/false boolean indicating whether the Epic is in archived state. */
  archived?: boolean;
  /** An array of Labels attached to the Epic. */
  labels?: CreateLabelParams[];
  /** A manual override for the time/date the Epic was completed. */
  completedAtOverride?: Date | null;
  /** An array of IDs for Objectives to which this Epic is related. */
  objectiveIds?: number[];
  /** The Epic's name. */
  name?: string;
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
  startedAtOverride?: Date | null;
  /** `Deprecated` The ID of the group to associate with the epic. Use `group_ids`. */
  groupId?: string | null;
  /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
  followerIds?: string[];
  /** An array of UUIDS for Groups to which this Epic is related. */
  groupIds?: string[];
  /** An array of UUIDs for any members you want to add as Owners on this Epic. */
  ownerIds?: string[];
  /**
   * This field can be set to another unique ID. In the case that the Epic has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
  /** The ID of the Epic we want to move this Epic before. */
  beforeId?: number;
  /** The ID of the Epic we want to move this Epic after. */
  afterId?: number;
  /** The Epic's deadline. */
  deadline?: Date | null;
};

const updateEpicProperties: s.Shape<UpdateEpic> = {
  description: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  labels: s.optional(s.array(s.lazy(() => createLabelParamsInternalSchema))),
  completedAtOverride: s.optionalNullable(s.dateTime()),
  objectiveIds: s.optional(s.array(s.int())),
  name: s.optional(s.string()),
  plannedStartDate: s.optionalNullable(s.dateTime()),
  state: s.optional(s.lazy(() => stateSchema)),
  milestoneId: s.optionalNullable(s.int()),
  requestedById: s.optional(s.string()),
  size: s.optionalNullable(s.lazy(() => sizeSchema)),
  epicStateId: s.optional(s.int()),
  startedAtOverride: s.optionalNullable(s.dateTime()),
  groupId: s.optionalNullable(s.string()),
  followerIds: s.optional(s.array(s.string())),
  groupIds: s.optional(s.array(s.string())),
  ownerIds: s.optional(s.array(s.string())),
  externalId: s.optional(s.string()),
  beforeId: s.optional(s.int()),
  afterId: s.optional(s.int()),
  deadline: s.optionalNullable(s.dateTime()),
  _keysMap: {
    completedAtOverride: "completed_at_override",
    objectiveIds: "objective_ids",
    plannedStartDate: "planned_start_date",
    milestoneId: "milestone_id",
    requestedById: "requested_by_id",
    epicStateId: "epic_state_id",
    startedAtOverride: "started_at_override",
    groupId: "group_id",
    followerIds: "follower_ids",
    groupIds: "group_ids",
    ownerIds: "owner_ids",
    externalId: "external_id",
    beforeId: "before_id",
    afterId: "after_id",
  },
};

export const updateEpicInternalSchema: Schema<UpdateEpic> = s.object<UpdateEpic>(updateEpicProperties);

export const updateEpicSchema: Schema<UpdateEpic> = s.lazySchema(() =>
  s.object<UpdateEpic>({
    ...updateEpicProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    labels: s.optional(s.array(s.lazy(() => createLabelParamsSchema))),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
    externalId: s.optional(s.string().check(s.maxLength(128))),
  }),
);
