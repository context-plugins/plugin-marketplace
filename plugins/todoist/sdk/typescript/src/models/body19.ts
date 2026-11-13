import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body19 = {
  /** Reaction emoji. */
  reaction: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body19Properties: s.Shape<Body19> = {
  reaction: s.string(),
};

export const body19InternalSchema: Schema<Body19> = s.object<Body19>(body19Properties, {
  additionalProperties: s.json(),
});

export const body19Schema: Schema<Body19> = s.lazySchema(() =>
  s.object<Body19>(
    {
      ...body19Properties,
      reaction: s.string().check(s.minLength(1), s.maxLength(64)),
    },
    { additionalProperties: s.json() },
  ),
);
