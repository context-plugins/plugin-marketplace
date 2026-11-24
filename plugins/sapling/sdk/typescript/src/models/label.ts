import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Label = {
  description?: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const labelProperties: s.Shape<Label> = {
  description: s.optional(s.string()),
  name: s.string(),
};

export const labelInternalSchema: Schema<Label> = s.object<Label>(labelProperties, {
  additionalProperties: s.json(),
});

export const labelSchema: Schema<Label> = s.lazySchema(() =>
  s.object<Label>(
    {
      ...labelProperties,
      description: s.optional(s.string().check(s.maxLength(200))),
      name: s.string().check(s.minLength(1), s.maxLength(50)),
    },
    { additionalProperties: s.json() },
  ),
);
