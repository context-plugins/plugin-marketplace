import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Medium1 = {
  url?: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const medium1Properties: s.Shape<Medium1> = {
  url: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const medium1InternalSchema: Schema<Medium1> = s.object<Medium1>(medium1Properties, {
  additionalProperties: s.json(),
});

export const medium1Schema: Schema<Medium1> = s.lazySchema(() =>
  s.object<Medium1>(
    {
      ...medium1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
