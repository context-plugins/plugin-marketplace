import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
  readonly oAuth2: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    apiKey: bearerAuth(options.apiKey),
    oAuth2: oauth2RefreshableScheme(
      options.oAuth2,
      options.oAuth2Strategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/auth"),
          tokenUrl: servers.authServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
