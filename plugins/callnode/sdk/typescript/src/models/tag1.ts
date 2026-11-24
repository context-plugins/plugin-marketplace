import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tag1 = {
  name: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tag1Properties: s.Shape<Tag1> = {
  name: s.string(),
  value: s.string(),
};

export const tag1InternalSchema: Schema<Tag1> = s.object<Tag1>(tag1Properties, {
  additionalProperties: s.json(),
});

export const tag1Schema: Schema<Tag1> = s.lazySchema(() =>
  s.object<Tag1>(
    {
      ...tag1Properties,
      name: s.string().check(s.pattern("^[a-zA-Z0-9_-]{1,256}$")),
      value: s.string().check(s.pattern("^[a-zA-Z0-9_-]{1,256}$")),
    },
    { additionalProperties: s.json() },
  ),
);
