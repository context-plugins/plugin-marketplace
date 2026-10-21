import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allowedMethodSchema, type AllowedMethod } from "./allowed-method.js";
import { authProvidersSchema, type AuthProviders } from "./auth-providers.js";

/** Response containing available authentication methods and session info */
export type InitAuthResponse = {
  /** Current authentication step (0-indexed). Always 0 for initial response. */
  currentStep: number;
  /** List of allowed authentication methods for the current step */
  allowedMethods: AllowedMethod[];
  /** Response message */
  message: string;
  /**
   * Configuration for external authentication providers (returned when those methods are allowed)
   */
  authProviders: AuthProviders;
  /** True when at least one allowed external provider has JIT provisioning enabled */
  jitEnabled: boolean;
};

export const initAuthResponseSchema: Schema<InitAuthResponse> = s.object<InitAuthResponse>({
  currentStep: s.int(),
  allowedMethods: s.array(s.lazy(() => allowedMethodSchema)),
  message: s.string(),
  authProviders: authProvidersSchema,
  jitEnabled: s.boolean(),
});
