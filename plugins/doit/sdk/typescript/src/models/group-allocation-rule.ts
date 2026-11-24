import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { allocationComponentSchema, type AllocationComponent } from "./allocation-component.js";
import { allocationRulePeriodSchema, type AllocationRulePeriod } from "./allocation-rule-period.js";
import {
  allocationValueExtractionInternalSchema,
  allocationValueExtractionSchema,
  type AllocationValueExtraction,
} from "./allocation-value-extraction.js";

/**
 * Allocation rule for a group type allocation. Components can reference other existing allocation
 * rules by using the "allocation_rule" dimension type.
 */
export type GroupAllocationRule = {
  /** Name of the allocation rule. */
  name?: string;
  /** Description of the allocation rule. */
  description?: string;
  /** Action to perform with this rule. */
  action: Action;
  /** ID of existing allocation (required for 'update' or 'select' action). */
  id?: string;
  /**
   * List of allocation filter components (required for 'create' or 'update' action). Can include
   * components of type "allocation_rule" to reference existing allocation rules.
   */
  components?: AllocationComponent[];
  /** Formula for combining components (A is the first component, B is the second one, etc.) */
  formula?: string;
  /**
   * Makes the rule emit a value extracted from the first non-empty source instead of the rule name.
   */
  valueExtraction?: AllocationValueExtraction | null;
  /**
   * Ordered, non-overlapping date ranges when this rule applies. Empty or absent means the rule
   * always applies.
   */
  validityPeriods?: AllocationRulePeriod[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const groupAllocationRuleProperties: s.Shape<GroupAllocationRule> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  action: actionSchema,
  id: s.optional(s.string()),
  components: s.optional(s.array(s.lazy(() => allocationComponentSchema))),
  formula: s.optional(s.string()),
  valueExtraction: s.optionalNullable(s.lazy(() => allocationValueExtractionInternalSchema)),
  validityPeriods: s.optionalNullable(s.array(s.lazy(() => allocationRulePeriodSchema))),
};

export const groupAllocationRuleInternalSchema: Schema<GroupAllocationRule> = s.object<GroupAllocationRule>(
  groupAllocationRuleProperties,
  { additionalProperties: s.json() },
);

export const groupAllocationRuleSchema: Schema<GroupAllocationRule> = s.lazySchema(() =>
  s.object<GroupAllocationRule>(
    {
      ...groupAllocationRuleProperties,
      valueExtraction: s.optionalNullable(s.lazy(() => allocationValueExtractionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
