import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";
import { operatorSchema, type Operator } from "./operator.js";

export type Condition = {
  id?: string;
  field: Field;
  operator: Operator;
  value: string;
  /** @default false */
  caseSensitive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const conditionProperties: s.Shape<Condition> = {
  id: s.optional(s.string()),
  field: fieldSchema,
  operator: operatorSchema,
  value: s.string(),
  caseSensitive: s.defaulted(s.boolean(), false),
};

export const conditionInternalSchema: Schema<Condition> = s.object<Condition>(conditionProperties, {
  additionalProperties: s.json(),
});

export const conditionSchema: Schema<Condition> = s.lazySchema(() =>
  s.object<Condition>(
    {
      ...conditionProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      value: s.string().check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
