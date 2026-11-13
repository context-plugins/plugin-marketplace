import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enum1InternalSchema, enum1Schema, type Enum1 } from "./unions/enum1.js";
import { maximum1Schema, type Maximum1 } from "./unions/maximum1.js";
import { minimum1Schema, type Minimum1 } from "./unions/minimum1.js";

/** The following constraints are supported for `year` fields. */
export type Constraints6 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  enum?: Enum1;
  minimum?: Minimum1;
  maximum?: Maximum1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints6Properties: s.Shape<Constraints6> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.lazy(() => enum1InternalSchema)),
  minimum: s.optional(s.lazy(() => minimum1Schema)),
  maximum: s.optional(s.lazy(() => maximum1Schema)),
};

export const constraints6InternalSchema: Schema<Constraints6> = s.object<Constraints6>(
  constraints6Properties,
  { additionalProperties: s.json() },
);

export const constraints6Schema: Schema<Constraints6> = s.lazySchema(() =>
  s.object<Constraints6>(
    {
      ...constraints6Properties,
      enum: s.optional(s.lazy(() => enum1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
