import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authStepSchema, type AuthStep } from "./auth-step.js";

/**
 * Organization authentication configuration. Supports 1-3 authentication steps for multi-factor
 * authentication. **Validation Rules:**
 * - Minimum 1 step, maximum 3 steps
 * - Each step must have unique order
 * - No duplicate methods within the same step
 * - No method can appear in multiple steps
 */
export type AuthConfig = {
  /** List of authentication steps in order */
  authMethods: AuthStep[];
};

export const authConfigSchema: Schema<AuthConfig> = s.object<AuthConfig>({
  authMethods: s.array(s.lazy(() => authStepSchema)),
});
