import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { epicAssociatedGroupSchema, type EpicAssociatedGroup } from "./epic-associated-group.js";
import { epicStatsSchema, type EpicStats } from "./epic-stats.js";
import { labelSlimInternalSchema, labelSlimSchema, type LabelSlim } from "./label-slim.js";

/**
 * EpicSlim represents the same resource as an Epic but is more light-weight, including all Epic
 * fields except the comments array. The description string can be optionally included. Use the [Get
 * Epic](#Get-Epic) endpoint to fetch the unabridged payload for an Epic.
 */
export type EpicSlim = {
  /** The Shortcut application url for the Epic. */
  appUrl: string;
  /** The Epic's description. */
  description?: string;
  /** True/false boolean that indicates whether the Epic is archived or not. */
  archived: boolean;
  /** A true/false boolean indicating if the Epic has been started. */
  started: boolean;
  /** A string description of this resource. */
  entityType: string;
  /** An array of Labels attached to the Epic. */
  labels: LabelSlim[];
  /** `Deprecated:` use `member_mention_ids`. */
  mentionIds: string[];
  /** An array of Member IDs that have been mentioned in the Epic description. */
  memberMentionIds: string[];
  /**
   * An array containing Group IDs and Group-owned story counts for the Epic's associated groups.
   */
  associatedGroups: EpicAssociatedGroup[];
  /** The IDs of Projects related to this Epic. */
  projectIds: number[];
  /** The number of stories in this epic which are not associated with a project. */
  storiesWithoutProjects: number;
  /** A manual override for the time/date the Epic was completed. */
  completedAtOverride: Date | null;
  /** The ID of the associated productboard integration. */
  productboardPluginId: string | null;
  /** The time/date the Epic was started. */
  startedAt: Date | null;
  /** The time/date the Epic was completed. */
  completedAt: Date | null;
  /** An array of IDs for Objectives to which this epic is related. */
  objectiveIds: number[];
  /** The name of the Epic. */
  name: string;
  globalId: string;
  /** A true/false boolean indicating if the Epic has been completed. */
  completed: boolean;
  /** The URL of the associated productboard feature. */
  productboardUrl: string | null;
  /** The Epic's planned start date. */
  plannedStartDate: Date | null;
  /** `Deprecated` The workflow state that the Epic is in. */
  state: string;
  /** `Deprecated` The ID of the Objective this Epic is related to. Use `objective_ids`. */
  milestoneId: number | null;
  /** The ID of the Member that requested the epic. */
  requestedById: string;
  /** The t-shirt size of the Epic for high-level effort estimation. */
  size: string | null;
  /** The ID of the Epic State. */
  epicStateId: number;
  /** An array of Label ids attached to the Epic. */
  labelIds: number[];
  /** A manual override for the time/date the Epic was started. */
  startedAtOverride: Date | null;
  /** `Deprecated` The ID of the group to associate with the epic. Use `group_ids`. */
  groupId: string | null;
  /** The time/date the Epic was updated. */
  updatedAt: Date | null;
  /** An array of Group IDs that have been mentioned in the Epic description. */
  groupMentionIds: string[];
  /** The ID of the associated productboard feature. */
  productboardId: string | null;
  /** An array of UUIDs for any Members you want to add as Followers on this Epic. */
  followerIds: string[];
  /** An array of UUIDS for Groups to which this Epic is related. */
  groupIds: string[];
  /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
  ownerIds: string[];
  /**
   * This field can be set to another unique ID. In the case that the Epic has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The unique ID of the Epic. */
  id: number;
  /** The Epic's relative position in the Epic workflow state. */
  position: number;
  /** The name of the associated productboard feature. */
  productboardName: string | null;
  /** The Epic's deadline. */
  deadline: Date | null;
  /** A group of calculated values for this Epic. */
  stats: EpicStats;
  /** The time/date the Epic was created. */
  createdAt: Date | null;
};

const epicSlimProperties: s.Shape<EpicSlim> = {
  appUrl: s.string(),
  description: s.optional(s.string()),
  archived: s.boolean(),
  started: s.boolean(),
  entityType: s.string(),
  labels: s.array(s.lazy(() => labelSlimInternalSchema)),
  mentionIds: s.array(s.string()),
  memberMentionIds: s.array(s.string()),
  associatedGroups: s.array(s.lazy(() => epicAssociatedGroupSchema)),
  projectIds: s.array(s.int()),
  storiesWithoutProjects: s.int(),
  completedAtOverride: s.nullable(s.dateTime()),
  productboardPluginId: s.nullable(s.string()),
  startedAt: s.nullable(s.dateTime()),
  completedAt: s.nullable(s.dateTime()),
  objectiveIds: s.array(s.int()),
  name: s.string(),
  globalId: s.string(),
  completed: s.boolean(),
  productboardUrl: s.nullable(s.string()),
  plannedStartDate: s.nullable(s.dateTime()),
  state: s.string(),
  milestoneId: s.nullable(s.int()),
  requestedById: s.string(),
  size: s.nullable(s.string()),
  epicStateId: s.int(),
  labelIds: s.array(s.int()),
  startedAtOverride: s.nullable(s.dateTime()),
  groupId: s.nullable(s.string()),
  updatedAt: s.nullable(s.dateTime()),
  groupMentionIds: s.array(s.string()),
  productboardId: s.nullable(s.string()),
  followerIds: s.array(s.string()),
  groupIds: s.array(s.string()),
  ownerIds: s.array(s.string()),
  externalId: s.nullable(s.string()),
  id: s.int(),
  position: s.int(),
  productboardName: s.nullable(s.string()),
  deadline: s.nullable(s.dateTime()),
  stats: epicStatsSchema,
  createdAt: s.nullable(s.dateTime()),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    mentionIds: "mention_ids",
    memberMentionIds: "member_mention_ids",
    associatedGroups: "associated_groups",
    projectIds: "project_ids",
    storiesWithoutProjects: "stories_without_projects",
    completedAtOverride: "completed_at_override",
    productboardPluginId: "productboard_plugin_id",
    startedAt: "started_at",
    completedAt: "completed_at",
    objectiveIds: "objective_ids",
    globalId: "global_id",
    productboardUrl: "productboard_url",
    plannedStartDate: "planned_start_date",
    milestoneId: "milestone_id",
    requestedById: "requested_by_id",
    epicStateId: "epic_state_id",
    labelIds: "label_ids",
    startedAtOverride: "started_at_override",
    groupId: "group_id",
    updatedAt: "updated_at",
    groupMentionIds: "group_mention_ids",
    productboardId: "productboard_id",
    followerIds: "follower_ids",
    groupIds: "group_ids",
    ownerIds: "owner_ids",
    externalId: "external_id",
    productboardName: "productboard_name",
    createdAt: "created_at",
  },
};

export const epicSlimInternalSchema: Schema<EpicSlim> = s.object<EpicSlim>(epicSlimProperties);

export const epicSlimSchema: Schema<EpicSlim> = s.lazySchema(() =>
  s.object<EpicSlim>({
    ...epicSlimProperties,
    labels: s.array(s.lazy(() => labelSlimSchema)),
  }),
);
