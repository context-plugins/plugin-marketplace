import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { basicAuth, bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
  readonly advancedAccessToken: AuthScheme;
  readonly oAuth: AuthScheme;
  readonly basicAuth: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    apiKey: bearerAuth(options.apiKey),
    advancedAccessToken: bearerAuth(options.advancedAccessToken),
    oAuth: oauth2RefreshableScheme(
      options.oAuth,
      options.oAuthStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/authorize"),
          tokenUrl: servers.default("/oauth2/tokens"),
          rawClient,
          placement: "header",
        }),
    ),
    basicAuth: basicAuth(options.basicAuth),
  };
}
