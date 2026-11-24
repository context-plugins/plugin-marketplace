import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Company1 = {
  companyId?: string;
  name?: string | null;
  domain?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const company1Schema: Schema<Company1> = s.object<Company1>(
  {
    companyId: s.optional(s.string()),
    name: s.optionalNullable(s.string()),
    domain: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
