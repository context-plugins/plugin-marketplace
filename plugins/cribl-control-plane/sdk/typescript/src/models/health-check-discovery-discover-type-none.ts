import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationNoneSchema,
  type AuthenticationOptionsHealthCheckAuthenticationNone,
} from "./authentication-options-health-check-authentication-none.js";

export type HealthCheckDiscoveryDiscoverTypeNone = {
  /** Discriminator value. */
  discoverType?: AuthenticationOptionsHealthCheckAuthenticationNone;
};

export const healthCheckDiscoveryDiscoverTypeNoneSchema: Schema<HealthCheckDiscoveryDiscoverTypeNone> =
  s.object<HealthCheckDiscoveryDiscoverTypeNone>({
    discoverType: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationNoneSchema)),
  });
