import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { benefitDataSchema, type BenefitData } from "./benefit-data.js";
import { phaseSchema, type Phase } from "./phase.js";

/** An automation idea or project in the Automation Hub pipeline */
export type Automation = {
  /** Unique integer identifier of the automation */
  id?: number;
  /** Display name of the automation idea */
  name?: string;
  /** Detailed description of the automation idea and its business value */
  description?: string;
  /** Current phase of the automation in the pipeline */
  phase?: Phase;
  /** Current status within the active phase */
  status?: string;
  /** Name of the user who submitted the automation idea */
  submittedBy?: string;
  /** ISO 8601 timestamp when the idea was submitted */
  submittedDate?: Date;
  /** ISO 8601 timestamp of the last modification */
  lastModified?: Date;
  /** Estimated cost-benefit analysis data for an automation idea */
  estimatedBenefit?: BenefitData;
  /** Tags associated with the automation for categorization */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationSchema: Schema<Automation> = s.object<Automation>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    phase: s.optional(s.lazy(() => phaseSchema)),
    status: s.optional(s.string()),
    submittedBy: s.optional(s.string()),
    submittedDate: s.optional(s.dateTime()),
    lastModified: s.optional(s.dateTime()),
    estimatedBenefit: s.optional(s.lazy(() => benefitDataSchema)),
    tags: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
