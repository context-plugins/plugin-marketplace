import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import {
  basicAuthCredentialsFromEnvironment,
  oauth2ClientCredentialsFromEnvironment,
} from "./core/auth/credentials.js";
import { oauth2RefreshableScheme, oauth2Scheme, type ScopedAuthScheme } from "./core/auth/oauth2-schemes.js";
import {
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
} from "./core/auth/oauth2-strategies.js";
import { basicAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly basicAuth: AuthScheme;
  readonly oauth2AuthorizationCode: AuthScheme;
  readonly oauth2ClientCredentials: ScopedAuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    basicAuth: basicAuth(
      "basicAuth",
      options.basicAuth ??
        basicAuthCredentialsFromEnvironment({
          username: "CURLEC_BASIC_AUTH_USERNAME",
          password: "CURLEC_BASIC_AUTH_PASSWORD",
        }),
    ),
    oauth2AuthorizationCode: oauth2RefreshableScheme(
      "oauth2AuthorizationCode",
      options.oauth2AuthorizationCode,
      options.oauth2AuthorizationCodeStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/authorize"),
          tokenUrl: servers.authServer("/token"),
          rawClient,
          placement: "header",
        }),
      "read_only",
    ),
    oauth2ClientCredentials: oauth2Scheme(
      "oauth2ClientCredentials",
      options.oauth2ClientCredentials ??
        oauth2ClientCredentialsFromEnvironment({
          clientId: "CURLEC_OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID",
          clientSecret: "CURLEC_OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET",
          scope: "CURLEC_OAUTH2_CLIENT_CREDENTIALS_SCOPE",
        }),
      options.oauth2ClientCredentialsStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.authServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
