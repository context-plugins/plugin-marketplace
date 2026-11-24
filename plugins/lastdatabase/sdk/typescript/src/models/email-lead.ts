import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";
import { packageIdSchema, type PackageId } from "./unions/package-id.js";

/** Email lead record. Additional fields may be returned by the underlying email inventory. */
export type EmailLead = {
  id?: Id;
  packageId?: PackageId | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  companyName?: string | null;
  companyWebsite?: string | null;
  linkedinUrl?: string | null;
  employeeSize?: string | null;
  revenue?: string | null;
  seniority?: string | null;
  technology?: string | null;
  jobTitle?: string | null;
  industry?: string | null;
  country?: string | null;
  state?: string | null;
  postalCode?: string | null;
  city?: string | null;
  source?: string | null;
  createdAt?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailLeadSchema: Schema<EmailLead> = s.object<EmailLead>(
  {
    id: s.optional(s.lazy(() => idSchema)),
    packageId: s.optionalNullable(s.lazy(() => packageIdSchema)),
    firstName: s.optionalNullable(s.string()),
    lastName: s.optionalNullable(s.string()),
    email: s.optionalNullable(s.string()),
    companyName: s.optionalNullable(s.string()),
    companyWebsite: s.optionalNullable(s.string()),
    linkedinUrl: s.optionalNullable(s.string()),
    employeeSize: s.optionalNullable(s.string()),
    revenue: s.optionalNullable(s.string()),
    seniority: s.optionalNullable(s.string()),
    technology: s.optionalNullable(s.string()),
    jobTitle: s.optionalNullable(s.string()),
    industry: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    postalCode: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    source: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.string()),
    _keysMap: {
      packageId: "package_id",
      firstName: "first_name",
      lastName: "last_name",
      companyName: "company_name",
      companyWebsite: "company_website",
      linkedinUrl: "linkedin_url",
      employeeSize: "employee_size",
      jobTitle: "job_title",
      postalCode: "postal_code",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
