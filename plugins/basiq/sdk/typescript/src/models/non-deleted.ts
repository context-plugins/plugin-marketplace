import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodDistribution1Schema, type MethodDistribution1 } from "./method-distribution1.js";
import { statusDistributionSchema, type StatusDistribution } from "./status-distribution.js";

export type NonDeleted = {
  count?: number;
  statusDistribution?: StatusDistribution;
  methodDistribution?: MethodDistribution1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nonDeletedSchema: Schema<NonDeleted> = s.object<NonDeleted>(
  {
    count: s.optional(s.int()),
    statusDistribution: s.optional(s.lazy(() => statusDistributionSchema)),
    methodDistribution: s.optional(s.lazy(() => methodDistribution1Schema)),
  },
  { additionalProperties: s.json() },
);
