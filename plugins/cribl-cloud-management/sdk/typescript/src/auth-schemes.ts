import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import { oauth2ClientCredentialsStrategy } from "./core/auth/oauth2-strategies.js";
import { bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly clientOauth: AuthScheme;
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    clientOauth: oauth2Scheme(
      options.clientOauth,
      options.clientOauthStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.accessTokenServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
    bearerAuth: bearerAuth(options.bearerAuth),
  };
}
