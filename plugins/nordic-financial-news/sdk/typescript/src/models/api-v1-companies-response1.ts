import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyDetailSchema, type CompanyDetail } from "./company-detail.js";

export type ApiV1CompaniesResponse1 = {
  company: CompanyDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CompaniesResponse1Schema: Schema<ApiV1CompaniesResponse1> =
  s.object<ApiV1CompaniesResponse1>(
    {
      company: companyDetailSchema,
    },
    { additionalProperties: s.json() },
  );
