import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authStepSchema, type AuthStep } from "./auth-step.js";

/** Response after updating organization authentication methods */
export type UpdateAuthMethodResponse = {
  message: string;
  /** Updated authentication steps (same shape as request body) */
  authMethod: AuthStep[];
};

export const updateAuthMethodResponseSchema: Schema<UpdateAuthMethodResponse> =
  s.object<UpdateAuthMethodResponse>({
    message: s.string(),
    authMethod: s.array(s.lazy(() => authStepSchema)),
  });
