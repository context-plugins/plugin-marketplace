import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuthCredentialsFromEnvironment } from "./core/auth/credentials.js";
import { basicAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly basicAuth: AuthScheme;
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    basicAuth: basicAuth(
      "basicAuth",
      options.basicAuth ??
        basicAuthCredentialsFromEnvironment({
          username: "READ_ME_BASIC_AUTH_USERNAME",
          password: "READ_ME_BASIC_AUTH_PASSWORD",
        }),
    ),
    bearerAuth: bearerAuth("bearerAuth", options.bearerAuth ?? environmentVariable("READ_ME_BEARER_AUTH")),
  };
}
