import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyInput = {
  name: string;
  domain?: string;
  customFields?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyInputSchema: Schema<CompanyInput> = s.object<CompanyInput>(
  {
    name: s.string(),
    domain: s.optional(s.string()),
    customFields: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      customFields: "custom_fields",
    },
  },
  { additionalProperties: s.json() },
);
