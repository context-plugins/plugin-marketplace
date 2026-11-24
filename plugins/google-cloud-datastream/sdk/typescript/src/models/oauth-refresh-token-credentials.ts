import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oauthClientCredentials1Schema, type OauthClientCredentials1 } from "./oauth-client-credentials1.js";
import { secret3Schema, type Secret3 } from "./secret3.js";

/** OAuth Refresh Token Credentials. */
export type OauthRefreshTokenCredentials = {
  /** Required. Specifies the OAuth Client Credentials. */
  oauthClientCredentials?: OauthClientCredentials1;
  /** Required. Specifies the OAuth Refresh Token. */
  refreshToken?: Secret3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oauthRefreshTokenCredentialsSchema: Schema<OauthRefreshTokenCredentials> =
  s.object<OauthRefreshTokenCredentials>(
    {
      oauthClientCredentials: s.optional(s.lazy(() => oauthClientCredentials1Schema)),
      refreshToken: s.optional(s.lazy(() => secret3Schema)),
    },
    { additionalProperties: s.json() },
  );
