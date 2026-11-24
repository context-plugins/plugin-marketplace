import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyIndustryData = {
  mainIndustry: string;
  subIndustry: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyIndustryDataSchema: Schema<CompanyIndustryData> = s.object<CompanyIndustryData>(
  {
    mainIndustry: s.string(),
    subIndustry: s.string(),
  },
  { additionalProperties: s.json() },
);
