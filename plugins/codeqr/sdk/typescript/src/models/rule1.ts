import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeSchema, type Attribute } from "./attribute.js";
import { operatorSchema, type Operator } from "./operator.js";

export type Rule1 = {
  attribute: Attribute;
  operator: Operator;
  value: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rule1Properties: s.Shape<Rule1> = {
  attribute: attributeSchema,
  operator: operatorSchema,
  value: s.string(),
  url: s.string(),
};

export const rule1InternalSchema: Schema<Rule1> = s.object<Rule1>(rule1Properties, {
  additionalProperties: s.json(),
});

export const rule1Schema: Schema<Rule1> = s.lazySchema(() =>
  s.object<Rule1>(
    {
      ...rule1Properties,
      value: s.string().check(s.minLength(1), s.maxLength(190)),
    },
    { additionalProperties: s.json() },
  ),
);
