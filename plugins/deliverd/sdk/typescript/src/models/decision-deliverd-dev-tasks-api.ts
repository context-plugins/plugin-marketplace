import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DecisionDeliverdDevTasksApi = {
  title: string;
  rationale?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const decisionDeliverdDevTasksApiProperties: s.Shape<DecisionDeliverdDevTasksApi> = {
  title: s.string(),
  rationale: s.optional(s.string()),
};

export const decisionDeliverdDevTasksApiInternalSchema: Schema<DecisionDeliverdDevTasksApi> =
  s.object<DecisionDeliverdDevTasksApi>(decisionDeliverdDevTasksApiProperties, {
    additionalProperties: s.json(),
  });

export const decisionDeliverdDevTasksApiSchema: Schema<DecisionDeliverdDevTasksApi> = s.lazySchema(() =>
  s.object<DecisionDeliverdDevTasksApi>(
    {
      ...decisionDeliverdDevTasksApiProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      rationale: s.optional(s.string().check(s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
