import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InlineRule = {
  /** Unique identifier for the Detection Rule. */
  id: string;
  /** Display name for the Detection Rule. */
  name: string;
  /** Expression that determines whether the Detection Rule matches an event. */
  condition: string;
  /** Severity level for the Detection Rule. */
  severityId?: number;
  /** Confidence level for the Detection Rule. */
  confidenceId?: number;
  /** If <code>true</code>, the Detection Rule creates an alert. Otherwise, <code>false</code>. */
  isAlert?: boolean;
  /** Alert message emitted when the Detection Rule matches. */
  message?: string;
  /** Tags for filtering and grouping detection rules. */
  tags?: string[];
};

export const inlineRuleSchema: Schema<InlineRule> = s.object<InlineRule>({
  id: s.string(),
  name: s.string(),
  condition: s.string(),
  severityId: s.optional(s.int()),
  confidenceId: s.optional(s.int()),
  isAlert: s.optional(s.boolean()),
  message: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
});
