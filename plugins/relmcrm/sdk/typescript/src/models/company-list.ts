import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";
import {
  objectRelmCrmCompaniesApiSchema,
  type ObjectRelmCrmCompaniesApi,
} from "./object-relm-crm-companies-api.js";

export type CompanyList = {
  object?: ObjectRelmCrmCompaniesApi;
  hasMore?: boolean;
  nextCursor?: string | null;
  data?: Company[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyListSchema: Schema<CompanyList> = s.object<CompanyList>(
  {
    object: s.optional(s.lazy(() => objectRelmCrmCompaniesApiSchema)),
    hasMore: s.optional(s.boolean()),
    nextCursor: s.optionalNullable(s.string()),
    data: s.optional(s.array(s.lazy(() => companySchema))),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
