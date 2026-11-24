import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authUserInternalSchema, authUserSchema, type AuthUser } from "./auth-user.js";

export type AuthSandboxTokenResponse = {
  token?: string;
  tokenType?: string;
  sandbox?: boolean;
  user?: AuthUser;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authSandboxTokenResponseProperties: s.Shape<AuthSandboxTokenResponse> = {
  token: s.optional(s.string()),
  tokenType: s.optional(s.string()),
  sandbox: s.optional(s.boolean()),
  user: s.optional(s.lazy(() => authUserInternalSchema)),
  _keysMap: {
    tokenType: "token_type",
  },
};

export const authSandboxTokenResponseInternalSchema: Schema<AuthSandboxTokenResponse> =
  s.object<AuthSandboxTokenResponse>(authSandboxTokenResponseProperties, { additionalProperties: s.json() });

export const authSandboxTokenResponseSchema: Schema<AuthSandboxTokenResponse> = s.lazySchema(() =>
  s.object<AuthSandboxTokenResponse>(
    {
      ...authSandboxTokenResponseProperties,
      user: s.optional(s.lazy(() => authUserSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
