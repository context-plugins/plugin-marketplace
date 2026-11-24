import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TokenRequest = {
  code: string;
  /** OAuth API key that is a public identifier for app */
  clientId: string;
  /** OAuth client secret that is a private secret known only to app and authorization server */
  clientSecret: string;
  /** Authorization server will redirect the user back to the application via redirect url */
  redirectUri: string;
  /** Type of grant used to get an access token */
  grantType: string;
  /**
   * Whether to refresh (regenerate) the extended access token. Defaults to false when absent. Set
   * to true to refresh; false or omit to reuse an existing extended token when available.
   */
  refreshExtendedToken?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tokenRequestProperties: s.Shape<TokenRequest> = {
  code: s.string(),
  clientId: s.string(),
  clientSecret: s.string(),
  redirectUri: s.string(),
  grantType: s.string(),
  refreshExtendedToken: s.optional(s.boolean()),
  _keysMap: {
    clientId: "client_id",
    clientSecret: "client_secret",
    redirectUri: "redirect_uri",
    grantType: "grant_type",
    refreshExtendedToken: "refresh_extended_token",
  },
};

export const tokenRequestInternalSchema: Schema<TokenRequest> = s.object<TokenRequest>(
  tokenRequestProperties,
  { additionalProperties: s.json() },
);

export const tokenRequestSchema: Schema<TokenRequest> = s.lazySchema(() =>
  s.object<TokenRequest>(
    {
      ...tokenRequestProperties,
      code: s.string().check(s.minLength(1)),
      clientId: s.string().check(s.minLength(1)),
      clientSecret: s.string().check(s.minLength(1)),
      redirectUri: s.string().check(s.minLength(1)),
      grantType: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
