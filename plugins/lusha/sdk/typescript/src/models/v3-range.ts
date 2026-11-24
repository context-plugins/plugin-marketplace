import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Numeric range filter */
export type V3Range = {
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3RangeProperties: s.Shape<V3Range> = {
  min: s.optional(s.int()),
  max: s.optional(s.int()),
};

export const v3RangeInternalSchema: Schema<V3Range> = s.object<V3Range>(v3RangeProperties, {
  additionalProperties: s.json(),
});

export const v3RangeSchema: Schema<V3Range> = s.lazySchema(() =>
  s.object<V3Range>(
    {
      ...v3RangeProperties,
      min: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
