import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectSchema, type Effect } from "./effect.js";

export type RuleDeliverdDevPoliciesApi = {
  name: string;
  priority: number;
  effect: Effect;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ruleDeliverdDevPoliciesApiSchema: Schema<RuleDeliverdDevPoliciesApi> =
  s.object<RuleDeliverdDevPoliciesApi>(
    {
      name: s.string(),
      priority: s.float64(),
      effect: effectSchema,
    },
    { additionalProperties: s.json() },
  );
