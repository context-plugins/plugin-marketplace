import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { allocationRuleSchema, type AllocationRule } from "./allocation-rule.js";
import { allocationType1Schema, type AllocationType1 } from "./allocation-type1.js";
import {
  groupAllocationRuleInternalSchema,
  groupAllocationRuleSchema,
  type GroupAllocationRule,
} from "./group-allocation-rule.js";

/** Allocation object, including rules and metadata. */
export type Allocation = {
  /** Allocation ID. */
  id?: string;
  /** Allocation name. */
  name?: string;
  /** Allocation description. */
  description?: string;
  /** Type of allocation (preset or custom). */
  type?: string;
  /** Composition type of allocation. */
  allocationType?: AllocationType1;
  /** The time when the allocation was created (in UNIX timestamp). */
  createTime?: number;
  /** Last time the allocation was modified (in UNIX timestamp). */
  updateTime?: number;
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

const allocationProperties: s.Shape<Allocation> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  type: s.optional(s.string()),
  allocationType: s.optional(s.lazy(() => allocationType1Schema)),
  createTime: s.optional(s.int()),
  updateTime: s.optional(s.int()),
  anomalyDetection: s.optional(s.boolean()),
  rule: s.optionalNullable(s.lazy(() => allocationRuleSchema)),
  rules: s.optional(s.array(s.nullable(s.lazy(() => groupAllocationRuleInternalSchema)))),
  unallocatedCosts: s.optionalNullable(s.string()),
  folderId: s.defaulted(s.string(), "root"),
};

export const allocationInternalSchema: Schema<Allocation> = s.object<Allocation>(allocationProperties, {
  additionalProperties: s.json(),
});

export const allocationSchema: Schema<Allocation> = s.lazySchema(() =>
  s.object<Allocation>(
    {
      ...allocationProperties,
      rules: s.optional(s.array(s.nullable(s.lazy(() => groupAllocationRuleSchema)))),
    },
    { additionalProperties: s.json() },
  ),
);
