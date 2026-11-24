import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequiredResultsFields = {
  directPhone?: boolean;
  companyPhone?: boolean;
  verifiedEmail?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requiredResultsFieldsSchema: Schema<RequiredResultsFields> = s.object<RequiredResultsFields>(
  {
    directPhone: s.optional(s.boolean()),
    companyPhone: s.optional(s.boolean()),
    verifiedEmail: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
