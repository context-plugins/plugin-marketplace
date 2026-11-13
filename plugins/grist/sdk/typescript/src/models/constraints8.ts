import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The following constraints are supported for `boolean` fields. */
export type Constraints8 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  enum?: boolean[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints8Properties: s.Shape<Constraints8> = {
  required: s.optional(s.boolean()),
  enum: s.optional(s.array(s.boolean())),
};

export const constraints8InternalSchema: Schema<Constraints8> = s.object<Constraints8>(
  constraints8Properties,
  { additionalProperties: s.json() },
);

export const constraints8Schema: Schema<Constraints8> = s.lazySchema(() =>
  s.object<Constraints8>(
    {
      ...constraints8Properties,
      enum: s.optional(s.array(s.boolean()).check(s.minLength(1), s.uniqueItems())),
    },
    { additionalProperties: s.json() },
  ),
);
