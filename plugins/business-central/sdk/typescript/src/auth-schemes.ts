import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2ClientCredentialsFromEnvironment } from "./core/auth/credentials.js";
import { oauth2RefreshableScheme, oauth2Scheme, type ScopedAuthScheme } from "./core/auth/oauth2-schemes.js";
import {
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
} from "./core/auth/oauth2-strategies.js";
import { bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import { environmentVariable } from "./core/runtime-environment.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly oauth2AuthorizationCode: AuthScheme;
  readonly oauth2ClientCredentials: ScopedAuthScheme;
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
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
      "https://api.businesscentral.dynamics.com/.default",
    ),
    oauth2ClientCredentials: oauth2Scheme(
      "oauth2ClientCredentials",
      options.oauth2ClientCredentials ??
        oauth2ClientCredentialsFromEnvironment({
          clientId: "DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_CLIENT_ID",
          clientSecret: "DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_CLIENT_SECRET",
          scope: "DYNAMICS365_BUSINESS_CENTRAL_OAUTH2_CLIENT_CREDENTIALS_SCOPE",
        }),
      options.oauth2ClientCredentialsStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.authServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
    bearerAuth: bearerAuth(
      "bearerAuth",
      options.bearerAuth ?? environmentVariable("DYNAMICS365_BUSINESS_CENTRAL_BEARER_AUTH"),
    ),
  };
}
