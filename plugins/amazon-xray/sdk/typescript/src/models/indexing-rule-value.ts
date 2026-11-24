import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { probabilisticRuleValueSchema, type ProbabilisticRuleValue } from "./probabilistic-rule-value.js";

/** Exactly one member is set. */
export type IndexingRuleValue = {
  probabilistic?: ProbabilisticRuleValue;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexingRuleValueSchema: Schema<IndexingRuleValue> = s.object<IndexingRuleValue>(
  {
    probabilistic: s.optional(s.lazy(() => probabilisticRuleValueSchema)),
    _keysMap: {
      probabilistic: "Probabilistic",
    },
  },
  { additionalProperties: s.json() },
);
