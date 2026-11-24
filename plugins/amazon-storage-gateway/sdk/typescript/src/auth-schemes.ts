import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly sigv4: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    sigv4: apiKeyHeaderAuth("sigv4", {
      name: "Authorization",
      secret: options.sigv4 ?? environmentVariable("AWS_STORAGE_GATEWAY_SIGV4"),
    }),
  };
}
