import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuthCredentialsFromEnvironment } from "./core/auth/credentials.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { basicAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
  readonly oauth2: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    apiKeyAuth: basicAuth(
      "apiKeyAuth",
      options.apiKeyAuth ??
        basicAuthCredentialsFromEnvironment({
          username: "UNBOUNCE_API_KEY_AUTH_USERNAME",
          password: "UNBOUNCE_API_KEY_AUTH_PASSWORD",
        }),
    ),
    oauth2: oauth2RefreshableScheme(
      "oauth2",
      options.oauth2,
      options.oauth2Strategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.default("/oauth/authorize"),
          tokenUrl: servers.default("/oauth/token"),
          rawClient,
          placement: "header",
        }),
      "full",
    ),
  };
}
