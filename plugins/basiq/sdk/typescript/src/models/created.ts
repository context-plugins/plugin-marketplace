import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { methodDistributionSchema, type MethodDistribution } from "./method-distribution.js";

export type Created = {
  count?: number;
  methodDistribution?: MethodDistribution;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createdSchema: Schema<Created> = s.object<Created>(
  {
    count: s.optional(s.int()),
    methodDistribution: s.optional(s.lazy(() => methodDistributionSchema)),
  },
  { additionalProperties: s.json() },
);
