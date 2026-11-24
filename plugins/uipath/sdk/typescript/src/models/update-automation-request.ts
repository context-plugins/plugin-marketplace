import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { benefitDataSchema, type BenefitData } from "./benefit-data.js";
import { phase1Schema, type Phase1 } from "./phase1.js";

/** Request payload for partially updating an automation record */
export type UpdateAutomationRequest = {
  /** Updated pipeline phase for the automation */
  phase?: Phase1;
  /** Updated status within the current phase */
  status?: string;
  /** Updated description of the automation */
  description?: string;
  /** Estimated cost-benefit analysis data for an automation idea */
  estimatedBenefit?: BenefitData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateAutomationRequestSchema: Schema<UpdateAutomationRequest> =
  s.object<UpdateAutomationRequest>(
    {
      phase: s.optional(s.lazy(() => phase1Schema)),
      status: s.optional(s.string()),
      description: s.optional(s.string()),
      estimatedBenefit: s.optional(s.lazy(() => benefitDataSchema)),
    },
    { additionalProperties: s.json() },
  );
