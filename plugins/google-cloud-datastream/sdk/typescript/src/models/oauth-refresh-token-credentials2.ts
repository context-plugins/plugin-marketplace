import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oauthClientCredentials1Schema, type OauthClientCredentials1 } from "./oauth-client-credentials1.js";
import { secret3Schema, type Secret3 } from "./secret3.js";

/**
 * Required. Credentials for authenticating with the Workday API. OAuth Refresh Token credentials
 * for authenticating with the Workday API.
 */
export type OauthRefreshTokenCredentials2 = {
  /** Required. Specifies the OAuth Client Credentials. */
  oauthClientCredentials?: OauthClientCredentials1;
  /** Required. Specifies the OAuth Refresh Token. */
  refreshToken?: Secret3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oauthRefreshTokenCredentials2Schema: Schema<OauthRefreshTokenCredentials2> =
  s.object<OauthRefreshTokenCredentials2>(
    {
      oauthClientCredentials: s.optional(s.lazy(() => oauthClientCredentials1Schema)),
      refreshToken: s.optional(s.lazy(() => secret3Schema)),
    },
    { additionalProperties: s.json() },
  );
