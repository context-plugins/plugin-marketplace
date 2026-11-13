import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryInternalSchema, categorySchema, type Category } from "./category.js";
import { milestoneStatsSchema, type MilestoneStats } from "./milestone-stats.js";

/**
 * (Deprecated) A Milestone is a collection of Epics that represent a release or some other large
 * initiative that you are working on. Milestones have become Objectives, so you should use
 * Objective-related API resources instead of Milestone ones.
 */
export type Milestone = {
  /** The Shortcut application url for the Milestone. */
  appUrl: string;
  /** The Milestone's description. */
  description: string;
  /** A boolean indicating whether the Milestone has been archived or not. */
  archived: boolean;
  /** A true/false boolean indicating if the Milestone has been started. */
  started: boolean;
  /** A string description of this resource. */
  entityType: string;
  /** A manual override for the time/date the Milestone was completed. */
  completedAtOverride: Date | null;
  /** The time/date the Milestone was started. */
  startedAt: Date | null;
  /** The time/date the Milestone was completed. */
  completedAt: Date | null;
  /** The name of the Milestone. */
  name: string;
  globalId: string;
  /** A true/false boolean indicating if the Milestone has been completed. */
  completed: boolean;
  /** The workflow state that the Milestone is in. */
  state: string;
  /** A manual override for the time/date the Milestone was started. */
  startedAtOverride: Date | null;
  /** The time/date the Milestone was updated. */
  updatedAt: Date;
  /** An array of Categories attached to the Milestone. */
  categories: Category[];
  /** The unique ID of the Milestone. */
  id: number;
  /** The IDs of the Key Results associated with the Objective. */
  keyResultIds: string[];
  /**
   * A number representing the position of the Milestone in relation to every other Milestone within
   * the Workspace.
   */
  position: number;
  /** A group of calculated values for this Milestone. */
  stats: MilestoneStats;
  /** The time/date the Milestone was created. */
  createdAt: Date;
};

const milestoneProperties: s.Shape<Milestone> = {
  appUrl: s.string(),
  description: s.string(),
  archived: s.boolean(),
  started: s.boolean(),
  entityType: s.string(),
  completedAtOverride: s.nullable(s.dateTime()),
  startedAt: s.nullable(s.dateTime()),
  completedAt: s.nullable(s.dateTime()),
  name: s.string(),
  globalId: s.string(),
  completed: s.boolean(),
  state: s.string(),
  startedAtOverride: s.nullable(s.dateTime()),
  updatedAt: s.dateTime(),
  categories: s.array(s.lazy(() => categoryInternalSchema)),
  id: s.int(),
  keyResultIds: s.array(s.string()),
  position: s.int(),
  stats: milestoneStatsSchema,
  createdAt: s.dateTime(),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    completedAtOverride: "completed_at_override",
    startedAt: "started_at",
    completedAt: "completed_at",
    globalId: "global_id",
    startedAtOverride: "started_at_override",
    updatedAt: "updated_at",
    keyResultIds: "key_result_ids",
    createdAt: "created_at",
  },
};

export const milestoneInternalSchema: Schema<Milestone> = s.object<Milestone>(milestoneProperties);

export const milestoneSchema: Schema<Milestone> = s.lazySchema(() =>
  s.object<Milestone>({
    ...milestoneProperties,
    categories: s.array(s.lazy(() => categorySchema)),
  }),
);
