import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Standard = {
  url: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const standardProperties: s.Shape<Standard> = {
  url: s.string(),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const standardInternalSchema: Schema<Standard> = s.object<Standard>(standardProperties, {
  additionalProperties: s.json(),
});

export const standardSchema: Schema<Standard> = s.lazySchema(() =>
  s.object<Standard>(
    {
      ...standardProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
