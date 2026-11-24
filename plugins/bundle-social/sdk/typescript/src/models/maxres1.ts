import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Maxres1 = {
  url?: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const maxres1Properties: s.Shape<Maxres1> = {
  url: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const maxres1InternalSchema: Schema<Maxres1> = s.object<Maxres1>(maxres1Properties, {
  additionalProperties: s.json(),
});

export const maxres1Schema: Schema<Maxres1> = s.lazySchema(() =>
  s.object<Maxres1>(
    {
      ...maxres1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
