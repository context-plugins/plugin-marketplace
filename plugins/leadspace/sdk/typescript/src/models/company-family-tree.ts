import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

/** The company hierarchy in addition to the matched company */
export type CompanyFamilyTree = {
  companies?: Company[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyFamilyTreeSchema: Schema<CompanyFamilyTree> = s.object<CompanyFamilyTree>(
  {
    companies: s.optional(s.array(s.lazy(() => companySchema))),
  },
  { additionalProperties: s.json() },
);
