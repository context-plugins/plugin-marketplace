import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enum6InternalSchema, enum6Schema, type Enum6 } from "./unions/enum6.js";

/** The following constraints apply for `array` fields. */
export type Constraints12 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  enum?: Enum6;
  /** An integer that specifies the minimum length of a value. */
  minLength?: number;
  /** An integer that specifies the maximum length of a value. */
  maxLength?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints12Properties: s.Shape<Constraints12> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.lazy(() => enum6InternalSchema)),
  minLength: s.optional(s.int()),
  maxLength: s.optional(s.int()),
};

export const constraints12InternalSchema: Schema<Constraints12> = s.object<Constraints12>(
  constraints12Properties,
  { additionalProperties: s.json() },
);

export const constraints12Schema: Schema<Constraints12> = s.lazySchema(() =>
  s.object<Constraints12>(
    {
      ...constraints12Properties,
      enum: s.optional(s.lazy(() => enum6Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
