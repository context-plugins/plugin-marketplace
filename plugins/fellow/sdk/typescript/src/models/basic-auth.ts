import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type1, type1Schema } from "./type1.js";

export type BasicAuth = {
  /** @default Type1.BasicAuth */
  type?: Type1;
  username: string;
  password: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const basicAuthProperties: s.Shape<BasicAuth> = {
  type: s.defaulted(type1Schema, Type1.BasicAuth),
  username: s.string(),
  password: s.string(),
};

export const basicAuthInternalSchema: Schema<BasicAuth> = s.object<BasicAuth>(basicAuthProperties, {
  additionalProperties: s.json(),
});

export const basicAuthSchema: Schema<BasicAuth> = s.lazySchema(() =>
  s.object<BasicAuth>(
    {
      ...basicAuthProperties,
      username: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
