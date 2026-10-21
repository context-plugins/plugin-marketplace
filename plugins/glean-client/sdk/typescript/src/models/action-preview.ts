import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Preview information for an action being executed. */
export type ActionPreview = {
  /** Markdown preview describing what the action will do. */
  markdown?: string;
  /** Short summary of what this specific tool invocation will do. */
  description?: string;
};

export const actionPreviewSchema: Schema<ActionPreview> = s.object<ActionPreview>({
  markdown: s.optional(s.string()),
  description: s.optional(s.string()),
});
