import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";
import { optinStatusSchema, type OptinStatus } from "./unions/optin-status.js";
import { packageIdSchema, type PackageId } from "./unions/package-id.js";

/** Phone lead record. Additional fields may be returned by the underlying phone inventory. */
export type PhoneLead = {
  id?: Id;
  packageId?: PackageId | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  countryCode?: string | null;
  country?: string | null;
  state?: string | null;
  postalCode?: string | null;
  city?: string | null;
  carrier?: string | null;
  category?: string | null;
  companyWebsite?: string | null;
  linkedinUrl?: string | null;
  employeeSize?: string | null;
  revenue?: string | null;
  seniority?: string | null;
  technology?: string | null;
  source?: string | null;
  optinStatus?: OptinStatus | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const phoneLeadSchema: Schema<PhoneLead> = s.object<PhoneLead>(
  {
    id: s.optional(s.lazy(() => idSchema)),
    packageId: s.optionalNullable(s.lazy(() => packageIdSchema)),
    firstName: s.optionalNullable(s.string()),
    lastName: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    countryCode: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    postalCode: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    carrier: s.optionalNullable(s.string()),
    category: s.optionalNullable(s.string()),
    companyWebsite: s.optionalNullable(s.string()),
    linkedinUrl: s.optionalNullable(s.string()),
    employeeSize: s.optionalNullable(s.string()),
    revenue: s.optionalNullable(s.string()),
    seniority: s.optionalNullable(s.string()),
    technology: s.optionalNullable(s.string()),
    source: s.optionalNullable(s.string()),
    optinStatus: s.optionalNullable(s.lazy(() => optinStatusSchema)),
    createdAt: s.optionalNullable(s.string()),
    updatedAt: s.optionalNullable(s.string()),
    _keysMap: {
      packageId: "package_id",
      firstName: "first_name",
      lastName: "last_name",
      phoneNumber: "phone_number",
      countryCode: "country_code",
      postalCode: "postal_code",
      companyWebsite: "company_website",
      linkedinUrl: "linkedin_url",
      employeeSize: "employee_size",
      optinStatus: "optin_status",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
