import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme, oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import {
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
} from "./core/auth/oauth2-strategies.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly mcp: AuthScheme;
  readonly oAuth2: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    mcp: oauth2RefreshableScheme(
      options.mcp,
      options.mcpStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.authServer("/authorize"),
          tokenUrl: servers.authServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
    oAuth2: oauth2Scheme(
      options.oAuth2,
      options.oAuth2Strategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.authServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
