import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Standard1 = {
  url?: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const standard1Properties: s.Shape<Standard1> = {
  url: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const standard1InternalSchema: Schema<Standard1> = s.object<Standard1>(standard1Properties, {
  additionalProperties: s.json(),
});

export const standard1Schema: Schema<Standard1> = s.lazySchema(() =>
  s.object<Standard1>(
    {
      ...standard1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
