import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body21 = {
  /** New content for the comment. If null or an empty string, no update is performed. */
  content: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body21Properties: s.Shape<Body21> = {
  content: s.nullable(s.string()),
};

export const body21InternalSchema: Schema<Body21> = s.object<Body21>(body21Properties, {
  additionalProperties: s.json(),
});

export const body21Schema: Schema<Body21> = s.lazySchema(() =>
  s.object<Body21>(
    {
      ...body21Properties,
      content: s.nullable(s.string().check(s.minLength(1), s.maxLength(15000))),
    },
    { additionalProperties: s.json() },
  ),
);
