import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { educationApiSchema, type EducationApi } from "./education-api.js";
import {
  jobHistoryApiCompiledCompanySchema,
  type JobHistoryApiCompiledCompany,
} from "./job-history-api-compiled-company.js";
import { npiData4Schema, type NpiData4 } from "./npi-data4.js";
import { profileEmailApiSchema, type ProfileEmailApi } from "./profile-email-api.js";
import { profileListApiSchema, type ProfileListApi } from "./profile-list-api.js";
import { profilePhoneApiSchema, type ProfilePhoneApi } from "./profile-phone-api.js";

export type ProfileApiWithMetadataCompiledCompany = {
  /** Profile List this contact was added to. */
  profileList?: ProfileListApi;
  id?: number;
  /**
   * Either "complete", "progress", "searching" or "not queued". A status other than "complete"
   * indicates the lookup is not finished, and the contact info is not fully available yet.
   */
  status?: string;
  name?: string | null;
  /**
   * profile_pic deprecated
   *
   * @deprecated
   */
  profilePic?: string | null;
  linkedinUrl?: string | null;
  /** Number of LinkedIn connections for this profile */
  connections?: number;
  links?: Record<string, unknown>;
  location?: string | null;
  currentTitle?: string | null;
  currentEmployer?: string | null;
  currentEmployerId?: number;
  /** This person's company's domain name. */
  currentEmployerDomain?: string | null;
  /** This person's company's website. */
  currentEmployerWebsite?: string | null;
  /** This person's company's LinkedIn URL. */
  currentEmployerLinkedinUrl?: string | null;
  /** This person's company's industry. */
  currentEmployerIndustry?: string | null;
  jobHistory?: JobHistoryApiCompiledCompany[];
  education?: EducationApi[];
  skills?: string[] | null;
  birthYear?: number;
  regionLatitude?: number | null;
  regionLongitude?: number | null;
  city?: string | null;
  region?: string | null;
  country?: string;
  countryCode?: string | null;
  /** The format of the NPI data that is serialized to the UI on the search page. */
  npiData?: NpiData4;
  tags?: string;
  /**
   * Indicates if cached emails were returned in the initial synchronous response. If false, email
   * fields will be null until the lookup is complete.
   */
  returnCachedEmails?: boolean;
  /**
   * Indicates if the LinkedIn profile exists or is no longer available."
   * * `True` = Active (as of last update)
   * * `False` = Unavailable (as of last update)
   */
  linkedinUrlActive?: boolean;
  recommendedEmail?: string | null;
  recommendedPersonalEmail?: string | null;
  recommendedProfessionalEmail?: string | null;
  currentWorkEmail?: string | null;
  currentPersonalEmail?: string | null;
  emails?: ProfileEmailApi[];
  phones?: ProfilePhoneApi[];
  /** User metadata about the profile, such as external ids, tags, notes, etc. */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const profileApiWithMetadataCompiledCompanyProperties: s.Shape<ProfileApiWithMetadataCompiledCompany> = {
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
  npiData: s.optional(s.lazy(() => npiData4Schema)),
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
  metadata: s.optional(s.record(s.string(), s.unknown())),
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

export const profileApiWithMetadataCompiledCompanyInternalSchema: Schema<ProfileApiWithMetadataCompiledCompany> =
  s.object<ProfileApiWithMetadataCompiledCompany>(profileApiWithMetadataCompiledCompanyProperties, {
    additionalProperties: s.json(),
  });

export const profileApiWithMetadataCompiledCompanySchema: Schema<ProfileApiWithMetadataCompiledCompany> =
  s.lazySchema(() =>
    s.object<ProfileApiWithMetadataCompiledCompany>(
      {
        ...profileApiWithMetadataCompiledCompanyProperties,
        name: s.optionalNullable(s.string().check(s.maxLength(128))),
        location: s.optionalNullable(s.string().check(s.maxLength(256))),
        city: s.optionalNullable(s.string().check(s.maxLength(128))),
        region: s.optionalNullable(s.string().check(s.maxLength(3))),
        countryCode: s.optionalNullable(s.string().check(s.maxLength(2))),
      },
      { additionalProperties: s.json() },
    ),
  );
