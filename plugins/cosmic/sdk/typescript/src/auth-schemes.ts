import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyQueryAuth, bearerAuth } from "./core/auth/schemes.js";
import { environmentVariable } from "./core/runtime-environment.js";

export type AuthSchemes = {
  readonly readKey: AuthScheme;
  readonly writeKey: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    readKey: apiKeyQueryAuth("readKey", {
      name: "read_key",
      secret: options.readKey ?? environmentVariable("COSMIC_READ_KEY"),
    }),
    writeKey: bearerAuth("writeKey", options.writeKey ?? environmentVariable("COSMIC_WRITE_KEY")),
  };
}
