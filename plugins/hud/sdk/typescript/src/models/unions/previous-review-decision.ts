import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskStateSchema, type TaskState } from "../task-state.js";

export type PreviousReviewDecision = TaskState;

export const previousReviewDecisionSchema: Schema<PreviousReviewDecision> = s.of<PreviousReviewDecision>(
  s.union([s.lazy(() => taskStateSchema)]),
);
