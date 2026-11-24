import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlanLimit = {
  name?: string;
  description?: string;
  limit?: number;
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planLimitSchema: Schema<PlanLimit> = s.object<PlanLimit>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    limit: s.optional(s.int()),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
