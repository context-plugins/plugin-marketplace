import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customWorkflowStageMetaSchema, type CustomWorkflowStageMeta } from "./custom-workflow-stage-meta.js";

export type CustomWorkflowMeta = {
  /** The name of the workflow stage that required this approval request */
  name?: string;
  stage?: CustomWorkflowStageMeta;
};

export const customWorkflowMetaSchema: Schema<CustomWorkflowMeta> = s.object<CustomWorkflowMeta>({
  name: s.optional(s.string()),
  stage: s.optional(s.lazy(() => customWorkflowStageMetaSchema)),
});
