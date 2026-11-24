import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobHistoryApiCompiledCompany = {
  /** Start date of the work experience */
  startDate?: string | null;
  /** End date of the work experience (Present if experience is current) @default "Present" */
  endDate?: string;
  /** Name of the company */
  company?: string | null;
  /** Name of the company */
  companyName?: string;
  /** RocketReach internal unique company ID */
  companyId?: number | null;
  /** Linkedin URL of the company */
  companyLinkedinUrl?: string;
  /** City of the company's location */
  companyCity?: string;
  /** Region of the company's location */
  companyRegion?: string;
  /** Country code of the company's location */
  companyCountryCode?: string;
  /** Department of the work experience */
  department?: string;
  /** Job title of the work experience */
  title?: string;
  /** Highest level of the work experience */
  highestLevel?: string;
  /** Description of the work experience */
  description?: string;
  /** Timestamp of the last update of this work experience */
  lastUpdated?: Date;
  /** Sub-department of the work experience */
  subDepartment?: string | null;
  /** True if the experience is the profile's current role, False otherwise @default false */
  isCurrent?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobHistoryApiCompiledCompanySchema: Schema<JobHistoryApiCompiledCompany> =
  s.object<JobHistoryApiCompiledCompany>(
    {
      startDate: s.optionalNullable(s.string()),
      endDate: s.defaulted(s.string(), "Present"),
      company: s.optionalNullable(s.string()),
      companyName: s.optional(s.string()),
      companyId: s.optionalNullable(s.int()),
      companyLinkedinUrl: s.optional(s.string()),
      companyCity: s.optional(s.string()),
      companyRegion: s.optional(s.string()),
      companyCountryCode: s.optional(s.string()),
      department: s.optional(s.string()),
      title: s.optional(s.string()),
      highestLevel: s.optional(s.string()),
      description: s.optional(s.string()),
      lastUpdated: s.optional(s.dateTime()),
      subDepartment: s.optionalNullable(s.string()),
      isCurrent: s.defaulted(s.boolean(), false),
      _keysMap: {
        startDate: "start_date",
        endDate: "end_date",
        companyName: "company_name",
        companyId: "company_id",
        companyLinkedinUrl: "company_linkedin_url",
        companyCity: "company_city",
        companyRegion: "company_region",
        companyCountryCode: "company_country_code",
        highestLevel: "highest_level",
        lastUpdated: "last_updated",
        subDepartment: "sub_department",
        isCurrent: "is_current",
      },
    },
    { additionalProperties: s.json() },
  );
