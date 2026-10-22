import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationNoneSchema,
  type AuthenticationOptionsHealthCheckAuthenticationNone,
} from "./authentication-options-health-check-authentication-none.js";

export type SplunkAuthenticationNone = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationNone;
};

export const splunkAuthenticationNoneSchema: Schema<SplunkAuthenticationNone> =
  s.object<SplunkAuthenticationNone>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationNoneSchema)),
  });
