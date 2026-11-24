import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type, typeSchema } from "./type.js";

export type BearerTokenAuth = {
  /** @default Type.BearerToken */
  type?: Type;
  token: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bearerTokenAuthProperties: s.Shape<BearerTokenAuth> = {
  type: s.defaulted(typeSchema, Type.BearerToken),
  token: s.string(),
};

export const bearerTokenAuthInternalSchema: Schema<BearerTokenAuth> = s.object<BearerTokenAuth>(
  bearerTokenAuthProperties,
  { additionalProperties: s.json() },
);

export const bearerTokenAuthSchema: Schema<BearerTokenAuth> = s.lazySchema(() =>
  s.object<BearerTokenAuth>(
    {
      ...bearerTokenAuthProperties,
      token: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
