import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Rule = {
  description?: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ruleProperties: s.Shape<Rule> = {
  description: s.optional(s.string()),
  name: s.string(),
};

export const ruleInternalSchema: Schema<Rule> = s.object<Rule>(ruleProperties, {
  additionalProperties: s.json(),
});

export const ruleSchema: Schema<Rule> = s.lazySchema(() =>
  s.object<Rule>(
    {
      ...ruleProperties,
      description: s.optional(s.string().check(s.maxLength(400))),
      name: s.string().check(s.minLength(1), s.maxLength(80)),
    },
    { additionalProperties: s.json() },
  ),
);
