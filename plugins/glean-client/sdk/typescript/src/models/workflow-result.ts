import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { workflowSchema, type Workflow } from "./workflow.js";

export type WorkflowResult = {
  workflow: Workflow;
};

export const workflowResultSchema: Schema<WorkflowResult> = s.object<WorkflowResult>({
  workflow: workflowSchema,
});
