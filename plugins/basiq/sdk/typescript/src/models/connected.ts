import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodDistributionSchema, type MethodDistribution } from "./method-distribution.js";

export type Connected = {
  total?: number;
  distribution?: MethodDistribution;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectedSchema: Schema<Connected> = s.object<Connected>(
  {
    total: s.optional(s.int()),
    distribution: s.optional(s.lazy(() => methodDistributionSchema)),
  },
  { additionalProperties: s.json() },
);
