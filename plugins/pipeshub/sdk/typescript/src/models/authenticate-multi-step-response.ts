import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authProvidersSchema, type AuthProviders } from "./auth-providers.js";

/** Current authentication step succeeded; additional MFA steps remain */
export type AuthenticateMultiStepResponse = {
  /** Step completion status @default "success" */
  status?: "success";
  /** Next authentication step index */
  nextStep: number;
  /** Allowed method types for the next step */
  allowedMethods: string[];
  /**
   * Configuration for external authentication providers (returned when those methods are allowed)
   */
  authProviders: AuthProviders;
};

export const authenticateMultiStepResponseSchema: Schema<AuthenticateMultiStepResponse> =
  s.object<AuthenticateMultiStepResponse>({
    status: s.defaulted(s.literal("success"), "success"),
    nextStep: s.int(),
    allowedMethods: s.array(s.string()),
    authProviders: authProvidersSchema,
  });
