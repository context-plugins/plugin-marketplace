import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tagged = {
  username: string;
  x?: number;
  y?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taggedProperties: s.Shape<Tagged> = {
  username: s.string(),
  x: s.optional(s.float64()),
  y: s.optional(s.float64()),
};

export const taggedInternalSchema: Schema<Tagged> = s.object<Tagged>(taggedProperties, {
  additionalProperties: s.json(),
});

export const taggedSchema: Schema<Tagged> = s.lazySchema(() =>
  s.object<Tagged>(
    {
      ...taggedProperties,
      x: s.optional(s.float64().check(s.gte(0), s.lte(1))),
      y: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
