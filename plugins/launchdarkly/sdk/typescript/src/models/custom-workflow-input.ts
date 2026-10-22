import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stageInputSchema, type StageInput } from "./stage-input.js";

export type CustomWorkflowInput = {
  maintainerId?: string;
  /** The workflow name */
  name: string;
  /** The workflow description */
  description?: string;
  /** A list of the workflow stages */
  stages?: StageInput[];
  /** The template key */
  templateKey?: string;
};

export const customWorkflowInputSchema: Schema<CustomWorkflowInput> = s.object<CustomWorkflowInput>({
  maintainerId: s.optional(s.string()),
  name: s.string(),
  description: s.optional(s.string()),
  stages: s.optional(s.array(s.lazy(() => stageInputSchema))),
  templateKey: s.optional(s.string()),
});
