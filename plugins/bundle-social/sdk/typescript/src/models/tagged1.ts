import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tagged1 = {
  username: string;
  x: number;
  y: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tagged1Properties: s.Shape<Tagged1> = {
  username: s.string(),
  x: s.float64(),
  y: s.float64(),
};

export const tagged1InternalSchema: Schema<Tagged1> = s.object<Tagged1>(tagged1Properties, {
  additionalProperties: s.json(),
});

export const tagged1Schema: Schema<Tagged1> = s.lazySchema(() =>
  s.object<Tagged1>(
    {
      ...tagged1Properties,
      x: s.float64().check(s.gte(0), s.lte(1)),
      y: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
