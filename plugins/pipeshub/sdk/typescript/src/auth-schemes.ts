import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme, oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import {
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
} from "./core/auth/oauth2-strategies.js";
import { bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly scopedToken: AuthScheme;
  readonly oauth2AuthorizationCode: AuthScheme;
  readonly oauth2ClientCredentials: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    bearerAuth: bearerAuth(options.bearerAuth),
    scopedToken: bearerAuth(options.scopedToken),
    oauth2AuthorizationCode: oauth2RefreshableScheme(
      options.oauth2AuthorizationCode,
      options.oauth2AuthorizationCodeStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.default("/api/v1/oauth2/authorize"),
          tokenUrl: servers.default("/api/v1/oauth2/token"),
          rawClient,
          placement: "header",
        }),
    ),
    oauth2ClientCredentials: oauth2Scheme(
      options.oauth2ClientCredentials,
      options.oauth2ClientCredentialsStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.default("/api/v1/oauth2/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
