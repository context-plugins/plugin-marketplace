import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationNoneSchema,
  type AuthenticationOptionsHealthCheckAuthenticationNone,
} from "./authentication-options-health-check-authentication-none.js";

export type RestAuthenticationNone = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationNone;
};

export const restAuthenticationNoneSchema: Schema<RestAuthenticationNone> = s.object<RestAuthenticationNone>({
  authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationNoneSchema)),
});
