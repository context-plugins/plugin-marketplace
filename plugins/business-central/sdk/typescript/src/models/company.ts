import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Company = {
  id?: string;
  name?: string;
  displayName?: string;
  businessProfileId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySchema: Schema<Company> = s.object<Company>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    displayName: s.optional(s.string()),
    businessProfileId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
