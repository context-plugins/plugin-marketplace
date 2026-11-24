import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly rocketReachApiKey: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    rocketReachApiKey: apiKeyHeaderAuth("rocketReachApiKey", {
      name: "Api-Key",
      secret: options.rocketReachApiKey ?? environmentVariable("ROCKET_REACH_ROCKET_REACH_API_KEY"),
    }),
  };
}
