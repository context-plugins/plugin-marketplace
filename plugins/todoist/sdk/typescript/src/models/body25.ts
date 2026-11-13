import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body25 = {
  /** The token to be revoked (access token). */
  token: string;
  /** A hint about the type of the token being revoked (optional). Expected value: 'access_token' */
  tokenTypeHint?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body25Schema: Schema<Body25> = s.object<Body25>(
  {
    token: s.string(),
    tokenTypeHint: s.optionalNullable(s.string()),
    _keysMap: {
      tokenTypeHint: "token_type_hint",
    },
  },
  { additionalProperties: s.json() },
);
