import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Field = {
  description?: string;
  name: string;
  /** Hint that the field should be present; it is still reported missing rather than guessed. */
  required?: boolean;
  /** Value type (default string). "date" is returned as YYYY-MM-DD; "list" is a list of strings. */
  type?: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fieldProperties: s.Shape<Field> = {
  description: s.optional(s.string()),
  name: s.string(),
  required: s.optional(s.boolean()),
  type: s.optional(s.lazy(() => typeSchema)),
};

export const fieldInternalSchema: Schema<Field> = s.object<Field>(fieldProperties, {
  additionalProperties: s.json(),
});

export const fieldSchema: Schema<Field> = s.lazySchema(() =>
  s.object<Field>(
    {
      ...fieldProperties,
      description: s.optional(s.string().check(s.maxLength(200))),
      name: s.string().check(s.minLength(1), s.maxLength(50)),
    },
    { additionalProperties: s.json() },
  ),
);
