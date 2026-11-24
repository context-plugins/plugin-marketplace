import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
  readonly servicesToken: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKey: apiKeyHeaderAuth("apiKey", {
      name: "Authorization",
      secret: options.apiKey ?? environmentVariable("BASIQ_API_KEY"),
    }),
    servicesToken: bearerAuth(
      "servicesToken",
      options.servicesToken ?? environmentVariable("BASIQ_SERVICES_TOKEN"),
    ),
  };
}
