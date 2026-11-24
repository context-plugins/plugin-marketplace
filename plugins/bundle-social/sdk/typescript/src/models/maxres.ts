import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Maxres = {
  url: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const maxresProperties: s.Shape<Maxres> = {
  url: s.string(),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const maxresInternalSchema: Schema<Maxres> = s.object<Maxres>(maxresProperties, {
  additionalProperties: s.json(),
});

export const maxresSchema: Schema<Maxres> = s.lazySchema(() =>
  s.object<Maxres>(
    {
      ...maxresProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
