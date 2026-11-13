import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  iterationAssociatedGroupSchema,
  type IterationAssociatedGroup,
} from "./iteration-associated-group.js";
import { iterationStatsSchema, type IterationStats } from "./iteration-stats.js";
import { labelInternalSchema, labelSchema, type Label } from "./label.js";

/**
 * IterationSlim represents the same resource as an Iteration, but is more light-weight. Use the
 * [Get Iteration](#Get-Iteration) endpoint to fetch the unabridged payload for an Iteration.
 */
export type IterationSlim = {
  /** The Shortcut application url for the Iteration. */
  appUrl: string;
  /** A string description of this resource */
  entityType: string;
  /** An array of labels attached to the iteration. */
  labels: Label[];
  /** `Deprecated:` use `member_mention_ids`. */
  mentionIds: string[];
  /** An array of Member IDs that have been mentioned in the Story description. */
  memberMentionIds: string[];
  /**
   * An array containing Group IDs and Group-owned story counts for the Iteration's associated
   * groups.
   */
  associatedGroups: IterationAssociatedGroup[];
  /** The name of the iteration. */
  name: string;
  globalId: string;
  /** An array of label ids attached to the iteration. */
  labelIds: number[];
  /** The instant when this iteration was last updated. */
  updatedAt: Date;
  /** An array of Group IDs that have been mentioned in the Story description. */
  groupMentionIds: string[];
  /** The date this iteration ends. */
  endDate: Date;
  /** An array of UUIDs for any Members listed as Followers. */
  followerIds: string[];
  /**
   * An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group
   * association is presented in our web UI.
   */
  groupIds: string[];
  /** The date this iteration begins. */
  startDate: Date;
  /** The status of the iteration. Values are either "unstarted", "started", or "done". */
  status: string;
  /** The ID of the iteration. */
  id: number;
  /** A group of calculated values for this Iteration. */
  stats: IterationStats;
  /** The instant when this iteration was created. */
  createdAt: Date;
};

const iterationSlimProperties: s.Shape<IterationSlim> = {
  appUrl: s.string(),
  entityType: s.string(),
  labels: s.array(s.lazy(() => labelInternalSchema)),
  mentionIds: s.array(s.string()),
  memberMentionIds: s.array(s.string()),
  associatedGroups: s.array(s.lazy(() => iterationAssociatedGroupSchema)),
  name: s.string(),
  globalId: s.string(),
  labelIds: s.array(s.int()),
  updatedAt: s.dateTime(),
  groupMentionIds: s.array(s.string()),
  endDate: s.dateTime(),
  followerIds: s.array(s.string()),
  groupIds: s.array(s.string()),
  startDate: s.dateTime(),
  status: s.string(),
  id: s.int(),
  stats: iterationStatsSchema,
  createdAt: s.dateTime(),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    mentionIds: "mention_ids",
    memberMentionIds: "member_mention_ids",
    associatedGroups: "associated_groups",
    globalId: "global_id",
    labelIds: "label_ids",
    updatedAt: "updated_at",
    groupMentionIds: "group_mention_ids",
    endDate: "end_date",
    followerIds: "follower_ids",
    groupIds: "group_ids",
    startDate: "start_date",
    createdAt: "created_at",
  },
};

export const iterationSlimInternalSchema: Schema<IterationSlim> =
  s.object<IterationSlim>(iterationSlimProperties);

export const iterationSlimSchema: Schema<IterationSlim> = s.lazySchema(() =>
  s.object<IterationSlim>({
    ...iterationSlimProperties,
    labels: s.array(s.lazy(() => labelSchema)),
  }),
);
