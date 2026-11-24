import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details about RDD usage. */
export type RddDataDistribution = {
  onHeapMemoryRemaining?: string;
  offHeapMemoryUsed?: string;
  offHeapMemoryRemaining?: string;
  address?: string;
  diskUsed?: string;
  onHeapMemoryUsed?: string;
  memoryRemaining?: string;
  memoryUsed?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rddDataDistributionSchema: Schema<RddDataDistribution> = s.object<RddDataDistribution>(
  {
    onHeapMemoryRemaining: s.optional(s.string()),
    offHeapMemoryUsed: s.optional(s.string()),
    offHeapMemoryRemaining: s.optional(s.string()),
    address: s.optional(s.string()),
    diskUsed: s.optional(s.string()),
    onHeapMemoryUsed: s.optional(s.string()),
    memoryRemaining: s.optional(s.string()),
    memoryUsed: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
