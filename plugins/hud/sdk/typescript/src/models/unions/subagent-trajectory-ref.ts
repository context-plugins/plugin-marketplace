import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { atifSubagentRefSchema, type AtifSubagentRef } from "../atif-subagent-ref.js";

export type SubagentTrajectoryRef = AtifSubagentRef[];

export const subagentTrajectoryRefInternalSchema: Schema<SubagentTrajectoryRef> = s.of<SubagentTrajectoryRef>(
  s.union([s.array(s.lazy(() => atifSubagentRefSchema))]),
);

export const subagentTrajectoryRefSchema: Schema<SubagentTrajectoryRef> = s.lazySchema(() =>
  s.of<SubagentTrajectoryRef>(
    s.union([s.array(s.lazy(() => atifSubagentRefSchema)).check(s.maxLength(1000))]),
  ),
);
