import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Default1 = {
  url?: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const default1Properties: s.Shape<Default1> = {
  url: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const default1InternalSchema: Schema<Default1> = s.object<Default1>(default1Properties, {
  additionalProperties: s.json(),
});

export const default1Schema: Schema<Default1> = s.lazySchema(() =>
  s.object<Default1>(
    {
      ...default1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
