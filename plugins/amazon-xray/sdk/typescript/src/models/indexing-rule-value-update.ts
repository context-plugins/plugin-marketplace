import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  probabilisticRuleValueUpdateSchema,
  type ProbabilisticRuleValueUpdate,
} from "./probabilistic-rule-value-update.js";

/** Exactly one member is set. */
export type IndexingRuleValueUpdate = {
  probabilistic?: ProbabilisticRuleValueUpdate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexingRuleValueUpdateSchema: Schema<IndexingRuleValueUpdate> =
  s.object<IndexingRuleValueUpdate>(
    {
      probabilistic: s.optional(s.lazy(() => probabilisticRuleValueUpdateSchema)),
      _keysMap: {
        probabilistic: "Probabilistic",
      },
    },
    { additionalProperties: s.json() },
  );
