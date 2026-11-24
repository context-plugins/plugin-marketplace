import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly analyticsApiKey: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    analyticsApiKey: bearerAuth(
      "analyticsApiKey",
      options.analyticsApiKey ?? environmentVariable("CUBIC_ANALYTICS_API_KEY"),
    ),
  };
}
