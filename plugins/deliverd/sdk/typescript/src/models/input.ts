import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Input = {
  name: string;
  description?: string;
  required?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const inputProperties: s.Shape<Input> = {
  name: s.string(),
  description: s.optional(s.string()),
  required: s.optional(s.boolean()),
};

export const inputInternalSchema: Schema<Input> = s.object<Input>(inputProperties, {
  additionalProperties: s.json(),
});

export const inputSchema: Schema<Input> = s.lazySchema(() =>
  s.object<Input>(
    {
      ...inputProperties,
      name: s.string().check(s.minLength(1), s.maxLength(60)),
      description: s.optional(s.string().check(s.maxLength(500))),
    },
    { additionalProperties: s.json() },
  ),
);
