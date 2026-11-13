import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enum4InternalSchema, enum4Schema, type Enum4 } from "./unions/enum4.js";

/** The following constraints are supported for `geopoint` fields. */
export type Constraints10 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  enum?: Enum4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints10Properties: s.Shape<Constraints10> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.lazy(() => enum4InternalSchema)),
};

export const constraints10InternalSchema: Schema<Constraints10> = s.object<Constraints10>(
  constraints10Properties,
  { additionalProperties: s.json() },
);

export const constraints10Schema: Schema<Constraints10> = s.lazySchema(() =>
  s.object<Constraints10>(
    {
      ...constraints10Properties,
      enum: s.optional(s.lazy(() => enum4Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
