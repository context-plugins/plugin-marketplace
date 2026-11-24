import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A single label (a.k.a. cost-allocation tag) on the resource, paired with the resource's cost
 * tagged with this key/value pair.
 */
export type AnomalyResourceLabel = {
  /** The label/tag key. */
  key?: string;
  /** The label/tag value. */
  value?: string;
  /**
   * The resource's cost tagged with this key/value pair; typically equal to the resource's cost,
   * since labels/tags usually cover all of its spend.
   */
  cost?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalyResourceLabelSchema: Schema<AnomalyResourceLabel> = s.object<AnomalyResourceLabel>(
  {
    key: s.optional(s.string()),
    value: s.optional(s.string()),
    cost: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
