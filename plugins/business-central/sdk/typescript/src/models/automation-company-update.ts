import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutomationCompanyUpdate = {
  name?: string;
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const automationCompanyUpdateSchema: Schema<AutomationCompanyUpdate> =
  s.object<AutomationCompanyUpdate>(
    {
      name: s.optional(s.string()),
      displayName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
