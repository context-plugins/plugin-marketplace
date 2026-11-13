import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body14 = {
  /** Reaction emoji. */
  reaction: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body14Properties: s.Shape<Body14> = {
  reaction: s.string(),
};

export const body14InternalSchema: Schema<Body14> = s.object<Body14>(body14Properties, {
  additionalProperties: s.json(),
});

export const body14Schema: Schema<Body14> = s.lazySchema(() =>
  s.object<Body14>(
    {
      ...body14Properties,
      reaction: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
