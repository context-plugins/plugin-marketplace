import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authUserInternalSchema, authUserSchema, type AuthUser } from "./auth-user.js";

export type AuthTokenResponse = {
  token?: string;
  tokenType?: string;
  user?: AuthUser;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authTokenResponseProperties: s.Shape<AuthTokenResponse> = {
  token: s.optional(s.string()),
  tokenType: s.optional(s.string()),
  user: s.optional(s.lazy(() => authUserInternalSchema)),
  _keysMap: {
    tokenType: "token_type",
  },
};

export const authTokenResponseInternalSchema: Schema<AuthTokenResponse> = s.object<AuthTokenResponse>(
  authTokenResponseProperties,
  { additionalProperties: s.json() },
);

export const authTokenResponseSchema: Schema<AuthTokenResponse> = s.lazySchema(() =>
  s.object<AuthTokenResponse>(
    {
      ...authTokenResponseProperties,
      user: s.optional(s.lazy(() => authUserSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
