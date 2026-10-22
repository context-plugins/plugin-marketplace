import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationBasicSchema,
  type AuthenticationOptionsHealthCheckAuthenticationBasic,
} from "./authentication-options-health-check-authentication-basic.js";

export type SplunkAuthenticationBasic = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationBasic;
  /** Basic authentication username */
  username: string;
  /** Basic authentication password */
  password: string;
};

export const splunkAuthenticationBasicSchema: Schema<SplunkAuthenticationBasic> =
  s.object<SplunkAuthenticationBasic>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationBasicSchema)),
    username: s.string(),
    password: s.string(),
  });
