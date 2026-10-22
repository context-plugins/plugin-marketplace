import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Insight workflow that produced this row, if applicable */
export type WorkflowId = number;

export const workflowIdSchema: Schema<WorkflowId> = s.of<WorkflowId>(s.union([s.int()]));
