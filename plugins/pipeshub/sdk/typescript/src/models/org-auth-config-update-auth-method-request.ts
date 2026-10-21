import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authStepSchema, type AuthStep } from "./auth-step.js";

export type OrgAuthConfigUpdateAuthMethodRequest = {
  /** Authentication steps to set for the organization (1-3 steps) */
  authMethod: AuthStep[];
};

export const orgAuthConfigUpdateAuthMethodRequestSchema: Schema<OrgAuthConfigUpdateAuthMethodRequest> =
  s.object<OrgAuthConfigUpdateAuthMethodRequest>({
    authMethod: s.array(s.lazy(() => authStepSchema)),
  });
