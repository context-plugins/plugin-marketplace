import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuthCredentialsFromEnvironment } from "./core/auth/credentials.js";
import { basicAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly basicAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    basicAuth: basicAuth(
      "basicAuth",
      options.basicAuth ??
        basicAuthCredentialsFromEnvironment({
          username: "BROWSER_STACK_BASIC_AUTH_USERNAME",
          password: "BROWSER_STACK_BASIC_AUTH_PASSWORD",
        }),
    ),
  };
}
