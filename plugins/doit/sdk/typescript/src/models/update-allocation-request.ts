import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allocationRuleSchema, type AllocationRule } from "./allocation-rule.js";
import {
  groupAllocationRuleInternalSchema,
  groupAllocationRuleSchema,
  type GroupAllocationRule,
} from "./group-allocation-rule.js";

/** Request body for updating an allocation. */
export type UpdateAllocationRequest = {
  /** Allocation name */
  name?: string | null;
  /** Allocation description */
  description?: string | null;
  /**
   * Whether anomaly detection is enabled for this allocation. Only applicable to single
   * allocations.
   */
  anomalyDetection?: boolean;
  /**
   * Single allocation rule. Components can reference other existing allocation rules by using the
   * "allocation_rule" dimension type.
   */
  rule?: AllocationRule | null;
  rules?: (GroupAllocationRule | null)[];
  /**
   * Custom label for values that do not fit into allocation (required for group type allocation).
   */
  unallocatedCosts?: string | null;
  /**
   * Identifier of the folder that contains the allocation. Set to "root" if the allocation is at
   * the top level (not in a folder).
   *
   * @default "root"
   */
  folderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateAllocationRequestProperties: s.Shape<UpdateAllocationRequest> = {
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  anomalyDetection: s.optional(s.boolean()),
  rule: s.optionalNullable(s.lazy(() => allocationRuleSchema)),
  rules: s.optional(s.array(s.nullable(s.lazy(() => groupAllocationRuleInternalSchema)))),
  unallocatedCosts: s.optionalNullable(s.string()),
  folderId: s.defaulted(s.string(), "root"),
};

export const updateAllocationRequestInternalSchema: Schema<UpdateAllocationRequest> =
  s.object<UpdateAllocationRequest>(updateAllocationRequestProperties, { additionalProperties: s.json() });

export const updateAllocationRequestSchema: Schema<UpdateAllocationRequest> = s.lazySchema(() =>
  s.object<UpdateAllocationRequest>(
    {
      ...updateAllocationRequestProperties,
      rules: s.optional(s.array(s.nullable(s.lazy(() => groupAllocationRuleSchema)))),
    },
    { additionalProperties: s.json() },
  ),
);
