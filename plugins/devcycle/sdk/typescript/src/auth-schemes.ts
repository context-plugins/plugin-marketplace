import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    bearerAuth: apiKeyHeaderAuth("bearerAuth", {
      name: "Authorization",
      secret: options.bearerAuth ?? environmentVariable("DEV_CYCLE_BEARER_AUTH"),
    }),
  };
}
