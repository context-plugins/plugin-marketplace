import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The following constraints apply to `any` fields. */
export type Constraints14 = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  enum?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraints14Properties: s.Shape<Constraints14> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  enum: s.optional(s.array(s.record(s.string(), s.unknown()))),
};

export const constraints14InternalSchema: Schema<Constraints14> = s.object<Constraints14>(
  constraints14Properties,
  { additionalProperties: s.json() },
);

export const constraints14Schema: Schema<Constraints14> = s.lazySchema(() =>
  s.object<Constraints14>(
    {
      ...constraints14Properties,
      enum: s.optional(s.array(s.record(s.string(), s.unknown())).check(s.minLength(1), s.uniqueItems())),
    },
    { additionalProperties: s.json() },
  ),
);
