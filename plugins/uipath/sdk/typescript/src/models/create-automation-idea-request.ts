import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { benefitDataSchema, type BenefitData } from "./benefit-data.js";

/** Request payload for creating a new automation idea */
export type CreateAutomationIdeaRequest = {
  /** Display name of the automation idea */
  name: string;
  /** Detailed description of the automation opportunity */
  description: string;
  /** Estimated cost-benefit analysis data for an automation idea */
  estimatedBenefit?: BenefitData;
  /** Tags for categorizing the automation idea */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createAutomationIdeaRequestProperties: s.Shape<CreateAutomationIdeaRequest> = {
  name: s.string(),
  description: s.string(),
  estimatedBenefit: s.optional(s.lazy(() => benefitDataSchema)),
  tags: s.optional(s.array(s.string())),
};

export const createAutomationIdeaRequestInternalSchema: Schema<CreateAutomationIdeaRequest> =
  s.object<CreateAutomationIdeaRequest>(createAutomationIdeaRequestProperties, {
    additionalProperties: s.json(),
  });

export const createAutomationIdeaRequestSchema: Schema<CreateAutomationIdeaRequest> = s.lazySchema(() =>
  s.object<CreateAutomationIdeaRequest>(
    {
      ...createAutomationIdeaRequestProperties,
      name: s.string().check(s.maxLength(256)),
    },
    { additionalProperties: s.json() },
  ),
);
