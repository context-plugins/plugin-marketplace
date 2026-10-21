import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { basicAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly basicAuth: AuthScheme;
  readonly oauth2: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    basicAuth: basicAuth(options.basicAuth),
    oauth2: oauth2RefreshableScheme(
      options.oauth2,
      options.oauth2Strategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/auth"),
          tokenUrl: servers.authServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
