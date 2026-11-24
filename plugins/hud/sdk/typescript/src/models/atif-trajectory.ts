import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { atifAgentInternalSchema, atifAgentSchema, type AtifAgent } from "./atif-agent.js";
import { atifStepInternalSchema, atifStepSchema, type AtifStep } from "./atif-step.js";
import { SchemaVersion, schemaVersionSchema } from "./schema-version.js";
import {
  continuedTrajectoryRefSchema,
  type ContinuedTrajectoryRef,
} from "./unions/continued-trajectory-ref.js";
import { extraSchema, type Extra } from "./unions/extra.js";
import { finalMetricsInternalSchema, finalMetricsSchema, type FinalMetrics } from "./unions/final-metrics.js";
import { notesSchema, type Notes } from "./unions/notes.js";
import { sessionIdSchema, type SessionId } from "./unions/session-id.js";
import {
  subagentTrajectoriesInternalSchema,
  subagentTrajectoriesSchema,
  type SubagentTrajectories,
} from "./unions/subagent-trajectories.js";
import { trajectoryIdSchema, type TrajectoryId } from "./unions/trajectory-id.js";

/** ATIF v1.0-v1.8 document accepted by the public import endpoints. */
export type AtifTrajectory = {
  /** @default SchemaVersion.AtifV18 */
  schemaVersion?: SchemaVersion;
  sessionId?: SessionId;
  trajectoryId?: TrajectoryId;
  agent: AtifAgent;
  steps: AtifStep[];
  notes?: Notes;
  finalMetrics?: FinalMetrics;
  continuedTrajectoryRef?: ContinuedTrajectoryRef;
  extra?: Extra;
  subagentTrajectories?: SubagentTrajectories;
};

const atifTrajectoryProperties: s.Shape<AtifTrajectory> = {
  schemaVersion: s.defaulted(schemaVersionSchema, SchemaVersion.AtifV18),
  sessionId: s.optional(s.lazy(() => sessionIdSchema)),
  trajectoryId: s.optional(s.lazy(() => trajectoryIdSchema)),
  agent: atifAgentInternalSchema,
  steps: s.array(s.lazy(() => atifStepInternalSchema)),
  notes: s.optional(s.lazy(() => notesSchema)),
  finalMetrics: s.optional(s.lazy(() => finalMetricsInternalSchema)),
  continuedTrajectoryRef: s.optional(s.lazy(() => continuedTrajectoryRefSchema)),
  extra: s.optional(s.lazy(() => extraSchema)),
  subagentTrajectories: s.optional(s.lazy(() => subagentTrajectoriesInternalSchema)),
  _keysMap: {
    schemaVersion: "schema_version",
    sessionId: "session_id",
    trajectoryId: "trajectory_id",
    finalMetrics: "final_metrics",
    continuedTrajectoryRef: "continued_trajectory_ref",
    subagentTrajectories: "subagent_trajectories",
  },
};

export const atifTrajectoryInternalSchema: Schema<AtifTrajectory> =
  s.object<AtifTrajectory>(atifTrajectoryProperties);

export const atifTrajectorySchema: Schema<AtifTrajectory> = s.lazySchema(() =>
  s.object<AtifTrajectory>({
    ...atifTrajectoryProperties,
    agent: atifAgentSchema,
    steps: s.array(s.lazy(() => atifStepSchema)).check(s.minLength(1), s.maxLength(10000)),
    finalMetrics: s.optional(s.lazy(() => finalMetricsSchema)),
    subagentTrajectories: s.optional(s.lazy(() => subagentTrajectoriesSchema)),
  }),
);
