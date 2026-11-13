import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enum3InternalSchema, enum3Schema, type Enum3 } from "./unions/enum3.js";

/** The following constraints are supported for `geojson` fields. */
export type Constraints11 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  enum?: Enum3;
  /** An integer that specifies the minimum length of a value. */
  minLength?: number;
  /** An integer that specifies the maximum length of a value. */
  maxLength?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints11Properties: s.Shape<Constraints11> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.lazy(() => enum3InternalSchema)),
  minLength: s.optional(s.int()),
  maxLength: s.optional(s.int()),
};

export const constraints11InternalSchema: Schema<Constraints11> = s.object<Constraints11>(
  constraints11Properties,
  { additionalProperties: s.json() },
);

export const constraints11Schema: Schema<Constraints11> = s.lazySchema(() =>
  s.object<Constraints11>(
    {
      ...constraints11Properties,
      enum: s.optional(s.lazy(() => enum3Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
