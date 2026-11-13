import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The following constraints are supported for `time` fields. */
export type Constraints4 = {
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

const constraints4Properties: s.Shape<Constraints4> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.array(s.string())),
  minimum: s.optional(s.string()),
  maximum: s.optional(s.string()),
};

export const constraints4InternalSchema: Schema<Constraints4> = s.object<Constraints4>(
  constraints4Properties,
  { additionalProperties: s.json() },
);

export const constraints4Schema: Schema<Constraints4> = s.lazySchema(() =>
  s.object<Constraints4>(
    {
      ...constraints4Properties,
      enum: s.optional(s.array(s.string()).check(s.minLength(1), s.uniqueItems())),
    },
    { additionalProperties: s.json() },
  ),
);
