import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import { oauth2PasswordStrategy } from "./core/auth/oauth2-strategies.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly oAuth2PasswordBearer: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    oAuth2PasswordBearer: oauth2Scheme(
      options.oAuth2PasswordBearer,
      options.oAuth2PasswordBearerStrategy ??
        oauth2PasswordStrategy({
          tokenUrl: servers.accessTokenServer("/token"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
