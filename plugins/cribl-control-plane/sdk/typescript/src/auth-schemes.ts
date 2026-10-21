import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import { oauth2ClientCredentialsStrategy } from "./core/auth/oauth2-strategies.js";
import { bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly clientOauth: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    bearerAuth: bearerAuth(options.bearerAuth),
    clientOauth: oauth2Scheme(
      options.clientOauth,
      options.clientOauthStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.accessTokenServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
