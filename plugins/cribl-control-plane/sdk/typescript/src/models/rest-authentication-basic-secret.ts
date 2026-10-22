import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationBasicSecretSchema,
  type AuthenticationOptionsHealthCheckAuthenticationBasicSecret,
} from "./authentication-options-health-check-authentication-basic-secret.js";

export type RestAuthenticationBasicSecret = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationBasicSecret;
  /** Select or create a stored secret that references your credentials */
  credentialsSecret: string;
};

export const restAuthenticationBasicSecretSchema: Schema<RestAuthenticationBasicSecret> =
  s.object<RestAuthenticationBasicSecret>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationBasicSecretSchema)),
    credentialsSecret: s.string(),
  });
