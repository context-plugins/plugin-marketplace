import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoryInternalSchema, categorySchema, type Category } from "./category.js";
import { objectiveStatsSchema, type ObjectiveStats } from "./objective-stats.js";

/**
 * An Objective is a collection of Epics that represent a release or some other large initiative
 * that you are working on.
 */
export type Objective = {
  /** The Shortcut application url for the Objective. */
  appUrl: string;
  /** The Objective's description. */
  description: string;
  /** A boolean indicating whether the Objective has been archived or not. */
  archived: boolean;
  /** A true/false boolean indicating if the Objective has been started. */
  started: boolean;
  /** A string description of this resource. */
  entityType: string;
  /** A manual override for the time/date the Objective was completed. */
  completedAtOverride: Date | null;
  /** The time/date the Objective was started. */
  startedAt: Date | null;
  /** The time/date the Objective was completed. */
  completedAt: Date | null;
  /** The name of the Objective. */
  name: string;
  globalId: string;
  /** A true/false boolean indicating if the Objectivehas been completed. */
  completed: boolean;
  /** The workflow state that the Objective is in. */
  state: string;
  /** A manual override for the time/date the Objective was started. */
  startedAtOverride: Date | null;
  /** The time/date the Objective was updated. */
  updatedAt: Date;
  /** An array of Categories attached to the Objective. */
  categories: Category[];
  /** The unique ID of the Objective. */
  id: number;
  /** The IDs of the Key Results associated with the Objective. */
  keyResultIds: string[];
  /**
   * A number representing the position of the Objective in relation to every other Objective within
   * the Workspace.
   */
  position: number;
  /** A group of calculated values for this Objective. */
  stats: ObjectiveStats;
  /** The time/date the Objective was created. */
  createdAt: Date;
};

const objectiveProperties: s.Shape<Objective> = {
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
  stats: objectiveStatsSchema,
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

export const objectiveInternalSchema: Schema<Objective> = s.object<Objective>(objectiveProperties);

export const objectiveSchema: Schema<Objective> = s.lazySchema(() =>
  s.object<Objective>({
    ...objectiveProperties,
    categories: s.array(s.lazy(() => categorySchema)),
  }),
);
