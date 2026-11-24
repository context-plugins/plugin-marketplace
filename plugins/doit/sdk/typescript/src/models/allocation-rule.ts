import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allocationComponentSchema, type AllocationComponent } from "./allocation-component.js";
import { allocationRulePeriodSchema, type AllocationRulePeriod } from "./allocation-rule-period.js";

/**
 * Single allocation rule. Components can reference other existing allocation rules by using the
 * "allocation_rule" dimension type.
 */
export type AllocationRule = {
  /** List of allocation filter components. */
  components: AllocationComponent[];
  /** Formula for combining components (A is the first component, B is the second one, etc.). */
  formula: string;
  /**
   * Ordered, non-overlapping date ranges when this rule applies. Empty or absent means the rule
   * always applies.
   */
  validityPeriods?: AllocationRulePeriod[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocationRuleSchema: Schema<AllocationRule> = s.object<AllocationRule>(
  {
    components: s.array(s.lazy(() => allocationComponentSchema)),
    formula: s.string(),
    validityPeriods: s.optionalNullable(s.array(s.lazy(() => allocationRulePeriodSchema))),
  },
  { additionalProperties: s.json() },
);
