import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { andGroupSchema, type AndGroup } from "./and-group.js";
import { templateTargetPair2Schema, type TemplateTargetPair2 } from "./template-target-pair2.js";

export type Policy = {
  /** Unique identifier for this policy */
  id: string;
  /** If true, this policy will be skipped during evaluation */
  disabled?: boolean;
  /** Time to wait (in minutes) to group similar alerts before sending */
  waitToGroup?: number;
  /** Event fields to use for grouping */
  groupByLabels?: string[];
  /**
   * List of conditions. If ANY condition matches (OR), the policy applies. Each condition is a list
   * of tags that must ALL match (AND).
   */
  conditions?: AndGroup[][];
  /** List of targets to route to and the templates to use */
  templateTargetPairs: TemplateTargetPair2[];
  /** If true, stop evaluating further policies after this one matches */
  final?: boolean;
  /** Evaluation order of this policy (lower numbers evaluated first) */
  order: number;
};

export const policySchema: Schema<Policy> = s.object<Policy>({
  id: s.string(),
  disabled: s.optional(s.boolean()),
  waitToGroup: s.optional(s.int()),
  groupByLabels: s.optional(s.array(s.string())),
  conditions: s.optional(s.array(s.array(s.lazy(() => andGroupSchema)))),
  templateTargetPairs: s.array(s.lazy(() => templateTargetPair2Schema)),
  final: s.optional(s.boolean()),
  order: s.int(),
});
