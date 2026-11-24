import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type High = {
  url: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const highProperties: s.Shape<High> = {
  url: s.string(),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const highInternalSchema: Schema<High> = s.object<High>(highProperties, {
  additionalProperties: s.json(),
});

export const highSchema: Schema<High> = s.lazySchema(() =>
  s.object<High>(
    {
      ...highProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
