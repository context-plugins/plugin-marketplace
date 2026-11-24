import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly accessKey: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    accessKey: apiKeyHeaderAuth("accessKey", {
      name: "Authorization",
      secret: options.accessKey ?? environmentVariable("LILI_ACCESS_KEY"),
    }),
  };
}
