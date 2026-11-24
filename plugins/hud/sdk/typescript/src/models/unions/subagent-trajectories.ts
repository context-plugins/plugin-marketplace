import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  atifTrajectoryInternalSchema,
  atifTrajectorySchema,
  type AtifTrajectory,
} from "../atif-trajectory.js";

export type SubagentTrajectories = AtifTrajectory[];

export const subagentTrajectoriesInternalSchema: Schema<SubagentTrajectories> = s.of<SubagentTrajectories>(
  s.union([s.array(s.lazy(() => atifTrajectoryInternalSchema))]),
);

export const subagentTrajectoriesSchema: Schema<SubagentTrajectories> = s.lazySchema(() =>
  s.of<SubagentTrajectories>(s.union([s.array(s.lazy(() => atifTrajectorySchema)).check(s.maxLength(100))])),
);
