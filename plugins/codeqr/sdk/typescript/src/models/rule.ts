import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeSchema, type Attribute } from "./attribute.js";
import { operatorSchema, type Operator } from "./operator.js";

export type Rule = {
  attribute: Attribute;
  operator: Operator;
  value: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ruleSchema: Schema<Rule> = s.object<Rule>(
  {
    attribute: attributeSchema,
    operator: operatorSchema,
    value: s.string(),
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
