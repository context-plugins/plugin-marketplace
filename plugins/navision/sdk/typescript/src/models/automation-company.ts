import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomationCompany = {
  id?: string;
  /** The company name */
  name?: string;
  /** The company display name */
  displayName?: string;
  /** The business profile ID */
  businessProfileId?: string;
  /** Whether this is an evaluation company */
  evaluationCompany?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationCompanySchema: Schema<AutomationCompany> = s.object<AutomationCompany>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    displayName: s.optional(s.string()),
    businessProfileId: s.optional(s.string()),
    evaluationCompany: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
