import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  daoExperimentVariantDetailSchema,
  type DaoExperimentVariantDetail,
} from "./dao-experiment-variant-detail.js";
import { experimentStatus2Schema, type ExperimentStatus2 } from "./experiment-status2.js";
import { description19Schema, type Description19 } from "./unions/description19.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";
import { stoppedAtSchema, type StoppedAt } from "./unions/stopped-at.js";
import { targetIdSchema, type TargetId } from "./unions/target-id.js";
import { targetSchema, type Target } from "./unions/target.js";

/**
 * Response model for experiment operations.
 *
 * An experiment splits the traffic of one channel target between two or more agents, so that the
 * agents can be compared on the same population. One variant is the control the others are measured
 * against. Each variant points at the agent that variant runs and carries the percentage of traffic
 * it answers; the weights of an experiment add up to 100.
 */
export type ExperimentResponse = {
  /** The internal ID of the experiment */
  id: number;
  /** The name of the experiment */
  name: string;
  /**
   * The channel target being split, or null if that target has since been deleted. A running
   * experiment always has one.
   */
  targetId: TargetId;
  /** The variants of the experiment, in a stable order */
  variants: DaoExperimentVariantDetail[];
  /** The hypothesis under test */
  description?: Description19;
  /** draft, running, or stopped */
  status: ExperimentStatus2;
  /** When the experiment started */
  startedAt?: StartedAt;
  /** When the experiment stopped */
  stoppedAt?: StoppedAt;
  /** When the experiment was created */
  createdAt: Date;
  /** When the experiment was last written */
  updatedAt: Date;
  /** Who last wrote it */
  lastUpdatedBy: string;
  /**
   * The channel target being split, resolved for display. Null when the target has since been
   * deleted, and when the read did not load it.
   */
  target?: Target;
};

export const experimentResponseSchema: Schema<ExperimentResponse> = s.object<ExperimentResponse>({
  id: s.int(),
  name: s.string(),
  targetId: targetIdSchema,
  variants: s.array(s.lazy(() => daoExperimentVariantDetailSchema)),
  description: s.optional(s.lazy(() => description19Schema)),
  status: experimentStatus2Schema,
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  stoppedAt: s.optional(s.lazy(() => stoppedAtSchema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  lastUpdatedBy: s.string(),
  target: s.optional(s.lazy(() => targetSchema)),
  _keysMap: {
    targetId: "target_id",
    startedAt: "started_at",
    stoppedAt: "stopped_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
  },
});
