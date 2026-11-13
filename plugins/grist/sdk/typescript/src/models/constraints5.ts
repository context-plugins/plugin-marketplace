import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The following constraints are supported for `datetime` fields. */
export type Constraints5 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  enum?: string[];
  minimum?: string;
  maximum?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints5Properties: s.Shape<Constraints5> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.array(s.string())),
  minimum: s.optional(s.string()),
  maximum: s.optional(s.string()),
};

export const constraints5InternalSchema: Schema<Constraints5> = s.object<Constraints5>(
  constraints5Properties,
  { additionalProperties: s.json() },
);

export const constraints5Schema: Schema<Constraints5> = s.lazySchema(() =>
  s.object<Constraints5>(
    {
      ...constraints5Properties,
      enum: s.optional(s.array(s.string()).check(s.minLength(1), s.uniqueItems())),
    },
    { additionalProperties: s.json() },
  ),
);
