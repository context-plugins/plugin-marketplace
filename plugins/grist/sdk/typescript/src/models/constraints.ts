import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The following constraints are supported for `string` fields. */
export type Constraints = {
  /** Indicates whether a property must have a value for each instance. */
  required?: boolean;
  /** When `true`, each value for the property `MUST` be unique. */
  unique?: boolean;
  /**
   * A regular expression pattern to test each value of the property against, where a truthy
   * response indicates validity.
   */
  pattern?: string;
  enum?: string[];
  /** An integer that specifies the minimum length of a value. */
  minLength?: number;
  /** An integer that specifies the maximum length of a value. */
  maxLength?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const constraintsProperties: s.Shape<Constraints> = {
  required: s.optional(s.boolean()),
  unique: s.optional(s.boolean()),
  pattern: s.optional(s.string()),
  enum: s.optional(s.array(s.string())),
  minLength: s.optional(s.int()),
  maxLength: s.optional(s.int()),
};

export const constraintsInternalSchema: Schema<Constraints> = s.object<Constraints>(constraintsProperties, {
  additionalProperties: s.json(),
});

export const constraintsSchema: Schema<Constraints> = s.lazySchema(() =>
  s.object<Constraints>(
    {
      ...constraintsProperties,
      enum: s.optional(s.array(s.string()).check(s.minLength(1), s.uniqueItems())),
    },
    { additionalProperties: s.json() },
  ),
);
