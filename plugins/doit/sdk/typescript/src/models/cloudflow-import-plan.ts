import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";
import { flowsToCreateSchema, type FlowsToCreate } from "./flows-to-create.js";
import { requirementSchema, type Requirement } from "./requirement.js";

/**
 * Dry-run result — what an import of this request would do, with every validation issue reported at
 * once.
 */
export type CloudflowImportPlan = {
  valid: boolean;
  requirements: Requirement[];
  flowsToCreate: FlowsToCreate[];
  errors: Error2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowImportPlanSchema: Schema<CloudflowImportPlan> = s.object<CloudflowImportPlan>(
  {
    valid: s.boolean(),
    requirements: s.array(s.lazy(() => requirementSchema)),
    flowsToCreate: s.array(s.lazy(() => flowsToCreateSchema)),
    errors: s.array(s.lazy(() => error2Schema)),
  },
  { additionalProperties: s.json() },
);
