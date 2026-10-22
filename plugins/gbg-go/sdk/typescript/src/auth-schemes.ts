import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { bearerAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly customerAccess: AuthScheme;
  readonly deviceConnect: AuthScheme;
  readonly pingId: AuthScheme;
  readonly interactionAccess: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    customerAccess: bearerAuth(options.customerAccess),
    deviceConnect: bearerAuth(options.deviceConnect),
    pingId: bearerAuth(options.pingId),
    interactionAccess: bearerAuth(options.interactionAccess),
  };
}
