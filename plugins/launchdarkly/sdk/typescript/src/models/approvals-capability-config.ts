import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formVariableSchema, type FormVariable } from "./form-variable.js";

export type ApprovalsCapabilityConfig = {
  /** The additional form variables for the approvals capability */
  additionalFormVariables?: FormVariable[];
};

export const approvalsCapabilityConfigSchema: Schema<ApprovalsCapabilityConfig> =
  s.object<ApprovalsCapabilityConfig>({
    additionalFormVariables: s.optional(s.array(s.lazy(() => formVariableSchema))),
  });
