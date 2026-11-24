import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuthCredentialsFromEnvironment } from "./core/auth/credentials.js";
import { apiKeyCookieAuth, basicAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly basicAuthApiKey: AuthScheme;
  readonly cookieToken: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    basicAuthApiKey: basicAuth(
      "basicAuthApiKey",
      options.basicAuthApiKey ??
        basicAuthCredentialsFromEnvironment({
          username: "SODA_BASIC_AUTH_API_KEY_USERNAME",
          password: "SODA_BASIC_AUTH_API_KEY_PASSWORD",
        }),
    ),
    cookieToken: apiKeyCookieAuth("cookieToken", {
      name: "token",
      secret: options.cookieToken ?? environmentVariable("SODA_COOKIE_TOKEN"),
    }),
  };
}
