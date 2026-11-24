import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly authorization: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    authorization: apiKeyHeaderAuth("authorization", {
      name: "Authorization",
      secret: options.authorization ?? environmentVariable("STOPLIGHT_AUTHORIZATION"),
    }),
  };
}
