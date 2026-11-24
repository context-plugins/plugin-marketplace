import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { basicAuthCredentialsFromEnvironment } from "./core/auth/credentials.js";
import { apiKeyHeaderAuth, basicAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiToken: AuthScheme;
  readonly basicAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiToken: apiKeyHeaderAuth("apiToken", {
      name: "Circle-Token",
      secret: options.apiToken ?? environmentVariable("CIRCLE_CI_API_TOKEN"),
    }),
    basicAuth: basicAuth(
      "basicAuth",
      options.basicAuth ??
        basicAuthCredentialsFromEnvironment({
          username: "CIRCLE_CI_BASIC_AUTH_USERNAME",
          password: "CIRCLE_CI_BASIC_AUTH_PASSWORD",
        }),
    ),
  };
}
