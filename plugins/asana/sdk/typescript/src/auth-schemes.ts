import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import { environmentVariable } from "./core/runtime-environment.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly personalAccessToken: AuthScheme;
  readonly oauth2: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    personalAccessToken: bearerAuth(
      "personalAccessToken",
      options.personalAccessToken ?? environmentVariable("ASANA_PERSONAL_ACCESS_TOKEN"),
    ),
    oauth2: oauth2RefreshableScheme(
      "oauth2",
      options.oauth2,
      options.oauth2Strategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/oauth_authorize"),
          tokenUrl: servers.authServer("/oauth_token"),
          rawClient,
          placement: "header",
        }),
      "default openid email profile",
    ),
  };
}
