import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationNoneSchema,
  type AuthenticationOptionsHealthCheckAuthenticationNone,
} from "./authentication-options-health-check-authentication-none.js";

export type RestDiscoveryDiscoverTypeNone = {
  /** Discriminator value. */
  discoverType?: AuthenticationOptionsHealthCheckAuthenticationNone;
};

export const restDiscoveryDiscoverTypeNoneSchema: Schema<RestDiscoveryDiscoverTypeNone> =
  s.object<RestDiscoveryDiscoverTypeNone>({
    discoverType: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationNoneSchema)),
  });
