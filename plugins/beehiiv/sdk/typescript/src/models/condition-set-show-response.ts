import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conditionSetSchema, type ConditionSet } from "./condition-set.js";

export type ConditionSetShowResponse = {
  data: ConditionSet;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionSetShowResponseSchema: Schema<ConditionSetShowResponse> =
  s.object<ConditionSetShowResponse>(
    {
      data: conditionSetSchema,
    },
    { additionalProperties: s.json() },
  );
