import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly apiKey: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKey: apiKeyHeaderAuth("apiKey", {
      name: "x-mailerlite-apikey",
      secret: options.apiKey ?? environmentVariable("MAILER_LITE_API_KEY"),
    }),
  };
}
