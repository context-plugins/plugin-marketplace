import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import { apiKeyQueryAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import { environmentVariable } from "./core/runtime-environment.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
  readonly oauth2: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    apiKey: apiKeyQueryAuth("apiKey", {
      name: "key",
      secret: options.apiKey ?? environmentVariable("GOOGLE_SEARCH_CONSOLE_API_KEY"),
    }),
    oauth2: oauth2RefreshableScheme(
      "oauth2",
      options.oauth2,
      options.oauth2Strategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/auth"),
          tokenUrl: servers.accessTokenServer("/token"),
          rawClient,
          placement: "header",
        }),
      "https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/webmasters.readonly",
    ),
  };
}
