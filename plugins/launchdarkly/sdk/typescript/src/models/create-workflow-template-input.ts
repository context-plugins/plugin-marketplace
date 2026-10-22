import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stageInputSchema, type StageInput } from "./stage-input.js";

export type CreateWorkflowTemplateInput = {
  key: string;
  name?: string;
  description?: string;
  workflowId?: string;
  stages?: StageInput[];
  projectKey?: string;
  environmentKey?: string;
  flagKey?: string;
};

export const createWorkflowTemplateInputSchema: Schema<CreateWorkflowTemplateInput> =
  s.object<CreateWorkflowTemplateInput>({
    key: s.string(),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    workflowId: s.optional(s.string()),
    stages: s.optional(s.array(s.lazy(() => stageInputSchema))),
    projectKey: s.optional(s.string()),
    environmentKey: s.optional(s.string()),
    flagKey: s.optional(s.string()),
  });
