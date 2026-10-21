import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationBasicSchema,
  type AuthenticationOptionsHealthCheckAuthenticationBasic,
} from "./authentication-options-health-check-authentication-basic.js";

export type RestAuthenticationBasic = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationBasic;
  /** Username */
  username: string;
  /** Password */
  password: string;
};

export const restAuthenticationBasicSchema: Schema<RestAuthenticationBasic> =
  s.object<RestAuthenticationBasic>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationBasicSchema)),
    username: s.string(),
    password: s.string(),
  });
