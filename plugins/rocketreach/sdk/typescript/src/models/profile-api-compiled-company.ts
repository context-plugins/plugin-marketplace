import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { educationApiSchema, type EducationApi } from "./education-api.js";
import {
  jobHistoryApiCompiledCompanySchema,
  type JobHistoryApiCompiledCompany,
} from "./job-history-api-compiled-company.js";
import { npiDataSchema, type NpiData } from "./npi-data.js";
import { profileEmailApiSchema, type ProfileEmailApi } from "./profile-email-api.js";
import { profileListApiSchema, type ProfileListApi } from "./profile-list-api.js";
import { profilePhoneApiSchema, type ProfilePhoneApi } from "./profile-phone-api.js";

export type ProfileApiCompiledCompany = {
  /** Profile List this contact was added to. */
  profileList?: ProfileListApi;
  /** RocketReach internal unique profile ID */
  id?: number;
  /** Status of the profile lookup. Either "complete", "progress", "searching" or "not queued" */
  status?: string;
  /** Name of the profile */
  name?: string | null;
  /** URL containing this profile's picture (if available) */
  profilePic?: string | null;
  /** LinkedIn URL of the profile */
  linkedinUrl?: string | null;
  /** Number of LinkedIn connections for this profile */
  connections?: number;
  /** Social media links for the profile */
  links?: Record<string, unknown>;
  /** Location of the profile */
  location?: string | null;
  /** Current job title of the profile */
  currentTitle?: string | null;
  /** Current employer of the profile */
  currentEmployer?: string | null;
  /** RocketReach internal unique company ID */
  currentEmployerId?: number;
  /** Domain for the employer of the profile */
  currentEmployerDomain?: string | null;
  /** Website for the employer of the profile */
  currentEmployerWebsite?: string | null;
  /** LinkedIn URL for the employer of the profile */
  currentEmployerLinkedinUrl?: string | null;
  /** This person's company's industry. */
  currentEmployerIndustry?: string | null;
  /** List of professional experiences for the profile */
  jobHistory?: JobHistoryApiCompiledCompany[];
  /** List of educational experiences for the profile */
  education?: EducationApi[];
  /** List of skills for the profile */
  skills?: string[] | null;
  /** Year of birth of the profile */
  birthYear?: number;
  /** Latitude of the region of the profile */
  regionLatitude?: number | null;
  /** Longitude of the region of the profile */
  regionLongitude?: number | null;
  /** City of the profile */
  city?: string | null;
  /** Region of the profile */
  region?: string | null;
  /** Country of the profile */
  country?: string;
  /** Country code of the profile */
  countryCode?: string | null;
  /** List of NPI data objects for the profile */
  npiData?: NpiData;
  tags?: string;
  /**
   * Indicates if cached emails were returned in the initial synchronous response. If false, email
   * fields will be null until the lookup is complete.
   */
  returnCachedEmails?: boolean;
  /**
   * Indicates if the LinkedIn profile exists or is no longer available.
   * * `True` = Active (as of last update)
   * * `False` = Unavailable (as of last update)
   */
  linkedinUrlActive?: boolean;
  /** Recommended email for the profile */
  recommendedEmail?: string | null;
  /** Recommended personal email for the profile */
  recommendedPersonalEmail?: string | null;
  /** Recommended professional email for the profile */
  recommendedProfessionalEmail?: string | null;
  /** Current work email for the profile */
  currentWorkEmail?: string | null;
  /** Current personal email for the profile */
  currentPersonalEmail?: string | null;
  /** List of email objects for the profile */
  emails?: ProfileEmailApi[];
  /** List of phone number objects for the profile */
  phones?: ProfilePhoneApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const profileApiCompiledCompanyProperties: s.Shape<ProfileApiCompiledCompany> = {
  profileList: s.optional(s.lazy(() => profileListApiSchema)),
  id: s.optional(s.int()),
  status: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  profilePic: s.optionalNullable(s.string()),
  linkedinUrl: s.optionalNullable(s.string()),
  connections: s.optional(s.int()),
  links: s.optional(s.record(s.string(), s.unknown())),
  location: s.optionalNullable(s.string()),
  currentTitle: s.optionalNullable(s.string()),
  currentEmployer: s.optionalNullable(s.string()),
  currentEmployerId: s.optional(s.int()),
  currentEmployerDomain: s.optionalNullable(s.string()),
  currentEmployerWebsite: s.optionalNullable(s.string()),
  currentEmployerLinkedinUrl: s.optionalNullable(s.string()),
  currentEmployerIndustry: s.optionalNullable(s.string()),
  jobHistory: s.optional(s.array(s.lazy(() => jobHistoryApiCompiledCompanySchema))),
  education: s.optional(s.array(s.lazy(() => educationApiSchema))),
  skills: s.optionalNullable(s.array(s.string())),
  birthYear: s.optional(s.int()),
  regionLatitude: s.optionalNullable(s.float64()),
  regionLongitude: s.optionalNullable(s.float64()),
  city: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  country: s.optional(s.string()),
  countryCode: s.optionalNullable(s.string()),
  npiData: s.optional(s.lazy(() => npiDataSchema)),
  tags: s.optional(s.string()),
  returnCachedEmails: s.optional(s.boolean()),
  linkedinUrlActive: s.optional(s.boolean()),
  recommendedEmail: s.optionalNullable(s.string()),
  recommendedPersonalEmail: s.optionalNullable(s.string()),
  recommendedProfessionalEmail: s.optionalNullable(s.string()),
  currentWorkEmail: s.optionalNullable(s.string()),
  currentPersonalEmail: s.optionalNullable(s.string()),
  emails: s.optional(s.array(s.lazy(() => profileEmailApiSchema))),
  phones: s.optional(s.array(s.lazy(() => profilePhoneApiSchema))),
  _keysMap: {
    profileList: "profile_list",
    profilePic: "profile_pic",
    linkedinUrl: "linkedin_url",
    currentTitle: "current_title",
    currentEmployer: "current_employer",
    currentEmployerId: "current_employer_id",
    currentEmployerDomain: "current_employer_domain",
    currentEmployerWebsite: "current_employer_website",
    currentEmployerLinkedinUrl: "current_employer_linkedin_url",
    currentEmployerIndustry: "current_employer_industry",
    jobHistory: "job_history",
    birthYear: "birth_year",
    regionLatitude: "region_latitude",
    regionLongitude: "region_longitude",
    countryCode: "country_code",
    npiData: "npi_data",
    returnCachedEmails: "return_cached_emails",
    linkedinUrlActive: "linkedin_url_active",
    recommendedEmail: "recommended_email",
    recommendedPersonalEmail: "recommended_personal_email",
    recommendedProfessionalEmail: "recommended_professional_email",
    currentWorkEmail: "current_work_email",
    currentPersonalEmail: "current_personal_email",
  },
};

export const profileApiCompiledCompanyInternalSchema: Schema<ProfileApiCompiledCompany> =
  s.object<ProfileApiCompiledCompany>(profileApiCompiledCompanyProperties, {
    additionalProperties: s.json(),
  });

export const profileApiCompiledCompanySchema: Schema<ProfileApiCompiledCompany> = s.lazySchema(() =>
  s.object<ProfileApiCompiledCompany>(
    {
      ...profileApiCompiledCompanyProperties,
      name: s.optionalNullable(s.string().check(s.maxLength(128))),
      location: s.optionalNullable(s.string().check(s.maxLength(256))),
      city: s.optionalNullable(s.string().check(s.maxLength(128))),
      region: s.optionalNullable(s.string().check(s.maxLength(3))),
      countryCode: s.optionalNullable(s.string().check(s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);
