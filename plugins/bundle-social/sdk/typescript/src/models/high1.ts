import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type High1 = {
  url?: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const high1Properties: s.Shape<High1> = {
  url: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const high1InternalSchema: Schema<High1> = s.object<High1>(high1Properties, {
  additionalProperties: s.json(),
});

export const high1Schema: Schema<High1> = s.lazySchema(() =>
  s.object<High1>(
    {
      ...high1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
