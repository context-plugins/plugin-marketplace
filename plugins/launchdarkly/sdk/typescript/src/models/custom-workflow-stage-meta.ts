import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomWorkflowStageMeta = {
  /** The zero-based index of the workflow stage */
  index?: number;
  /** The name of the workflow stage */
  name?: string;
};

export const customWorkflowStageMetaSchema: Schema<CustomWorkflowStageMeta> =
  s.object<CustomWorkflowStageMeta>({
    index: s.optional(s.int()),
    name: s.optional(s.string()),
  });
