import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly awsSigV4: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    awsSigV4: apiKeyHeaderAuth("awsSigV4", {
      name: "Authorization",
      secret: options.awsSigV4 ?? environmentVariable("AMAZON_FREE_RTOS_AWS_SIG_V4"),
    }),
  };
}
