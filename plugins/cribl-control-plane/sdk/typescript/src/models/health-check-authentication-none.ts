import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationNoneSchema,
  type AuthenticationOptionsHealthCheckAuthenticationNone,
} from "./authentication-options-health-check-authentication-none.js";

export type HealthCheckAuthenticationNone = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationNone;
};

export const healthCheckAuthenticationNoneSchema: Schema<HealthCheckAuthenticationNone> =
  s.object<HealthCheckAuthenticationNone>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationNoneSchema)),
  });
