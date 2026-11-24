import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomationCompanyCreate = {
  /** The name of the new company */
  name: string;
  /** The display name of the new company */
  displayName: string;
  businessProfileId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationCompanyCreateSchema: Schema<AutomationCompanyCreate> =
  s.object<AutomationCompanyCreate>(
    {
      name: s.string(),
      displayName: s.string(),
      businessProfileId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
