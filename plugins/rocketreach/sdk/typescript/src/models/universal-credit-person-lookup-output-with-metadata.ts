import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { educationApiSchema, type EducationApi } from "./education-api.js";
import {
  jobHistoryApiCompiledCompanySchema,
  type JobHistoryApiCompiledCompany,
} from "./job-history-api-compiled-company.js";
import {
  npiDataRocketReachPeopleDataApiSchema,
  type NpiDataRocketReachPeopleDataApi,
} from "./npi-data-rocket-reach-people-data-api.js";
import { profileEmailApiSchema, type ProfileEmailApi } from "./profile-email-api.js";
import { profileListApiSchema, type ProfileListApi } from "./profile-list-api.js";
import { profilePhoneApiSchema, type ProfilePhoneApi } from "./profile-phone-api.js";

export type UniversalCreditPersonLookupOutputWithMetadata = {
  /** Profile List this contact was added to. */
  profileList?: ProfileListApi;
  /** RocketReach internal unique profile ID */
  id?: number;
  /** Status of the profile lookup. Either "complete", "progress", "searching" or "not queued" */
  status?: string;
  /** Name of the profile */
  name?: string | null;
  /**
   * profile_pic deprecated
   *
   * @deprecated
   */
  profilePic?: string | null;
  /** LinkedIn URL of the profile */
  linkedinUrl?: string | null;
  /** Number of LinkedIn connections for this profile */
  connections?: number;
  /** Location of the profile */
  location?: string | null;
  /** Current job title of the profile */
  currentTitle?: string | null;
  /** Current employer of the profile */
  currentEmployer?: string | null;
  /** RocketReach internal unique company ID */
  currentEmployerId?: number;
  /** This person's company's domain name. */
  currentEmployerDomain?: string | null;
  /** This person's company's website. */
  currentEmployerWebsite?: string | null;
  /** This person's company's LinkedIn URL. */
  currentEmployerLinkedinUrl?: string | null;
  /** Year of birth of the profile */
  birthYear?: string;
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
  /**
   * [`reveal_detailed_person_enrichment=true` required or this field will not be returned] List of
   * professional experiences for the profile
   */
  jobHistory?: JobHistoryApiCompiledCompany[];
  /**
   * [`reveal_detailed_person_enrichment=true` required or this field will not be returned] List of
   * educational experiences for the profile
   */
  education?: EducationApi[];
  /**
   * [`reveal_detailed_person_enrichment=true` required or this field will not be returned] List of
   * skills for the profile
   */
  skills?: string[] | null;
  /**
   * [`reveal_detailed_person_enrichment=true` required or this field will not be returned] Social
   * media links for the profile
   */
  links?: Record<string, unknown>;
  /**
   * [`reveal_healthcare_enrichment=true` required or this field will not be returned] List of NPI
   * data objects for the profile
   */
  npiData?: NpiDataRocketReachPeopleDataApi;
  /**
   * [`reveal_personal_email OR reveal_professional_email=true` required or this field will not be
   * returned] Recommended email for the profile
   */
  recommendedEmail?: string | null;
  /**
   * [`reveal_personal_email OR reveal_professional_email=true` required or this field will not be
   * returned] List of email objects for the profile
   */
  emails?: ProfileEmailApi[];
  /**
   * [`reveal_personal_email=true` required or this field will not be returned] Recommended personal
   * email for the profile
   */
  recommendedPersonalEmail?: string | null;
  /**
   * [`reveal_personal_email=true` required or this field will not be returned] Current personal
   * email for the profile
   */
  currentPersonalEmail?: string | null;
  /**
   * [`reveal_professional_email=true` required or this field will not be returned] Recommended
   * professional email for the profile
   */
  recommendedProfessionalEmail?: string | null;
  /**
   * [`reveal_professional_email=true` required or this field will not be returned] Current work
   * email for the profile
   */
  currentWorkEmail?: string | null;
  /**
   * [`reveal_phone=true` required or this field will not be returned] List of phone number objects
   * for the profile
   */
  phones?: ProfilePhoneApi[];
  /** User metadata associated with the profile lookup */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const universalCreditPersonLookupOutputWithMetadataProperties: s.Shape<UniversalCreditPersonLookupOutputWithMetadata> =
  {
    profileList: s.optional(s.lazy(() => profileListApiSchema)),
    id: s.optional(s.int()),
    status: s.optional(s.string()),
    name: s.optionalNullable(s.string()),
    profilePic: s.optionalNullable(s.string()),
    linkedinUrl: s.optionalNullable(s.string()),
    connections: s.optional(s.int()),
    location: s.optionalNullable(s.string()),
    currentTitle: s.optionalNullable(s.string()),
    currentEmployer: s.optionalNullable(s.string()),
    currentEmployerId: s.optional(s.int()),
    currentEmployerDomain: s.optionalNullable(s.string()),
    currentEmployerWebsite: s.optionalNullable(s.string()),
    currentEmployerLinkedinUrl: s.optionalNullable(s.string()),
    birthYear: s.optional(s.string()),
    regionLatitude: s.optionalNullable(s.float64()),
    regionLongitude: s.optionalNullable(s.float64()),
    city: s.optionalNullable(s.string()),
    region: s.optionalNullable(s.string()),
    country: s.optional(s.string()),
    countryCode: s.optionalNullable(s.string()),
    returnCachedEmails: s.optional(s.boolean()),
    linkedinUrlActive: s.optional(s.boolean()),
    jobHistory: s.optional(s.array(s.lazy(() => jobHistoryApiCompiledCompanySchema))),
    education: s.optional(s.array(s.lazy(() => educationApiSchema))),
    skills: s.optionalNullable(s.array(s.string())),
    links: s.optional(s.record(s.string(), s.unknown())),
    npiData: s.optional(s.lazy(() => npiDataRocketReachPeopleDataApiSchema)),
    recommendedEmail: s.optionalNullable(s.string()),
    emails: s.optional(s.array(s.lazy(() => profileEmailApiSchema))),
    recommendedPersonalEmail: s.optionalNullable(s.string()),
    currentPersonalEmail: s.optionalNullable(s.string()),
    recommendedProfessionalEmail: s.optionalNullable(s.string()),
    currentWorkEmail: s.optionalNullable(s.string()),
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
      birthYear: "birth_year",
      regionLatitude: "region_latitude",
      regionLongitude: "region_longitude",
      countryCode: "country_code",
      returnCachedEmails: "return_cached_emails",
      linkedinUrlActive: "linkedin_url_active",
      jobHistory: "job_history",
      npiData: "npi_data",
      recommendedEmail: "recommended_email",
      recommendedPersonalEmail: "recommended_personal_email",
      currentPersonalEmail: "current_personal_email",
      recommendedProfessionalEmail: "recommended_professional_email",
      currentWorkEmail: "current_work_email",
    },
  };

export const universalCreditPersonLookupOutputWithMetadataInternalSchema: Schema<UniversalCreditPersonLookupOutputWithMetadata> =
  s.object<UniversalCreditPersonLookupOutputWithMetadata>(
    universalCreditPersonLookupOutputWithMetadataProperties,
    { additionalProperties: s.json() },
  );

export const universalCreditPersonLookupOutputWithMetadataSchema: Schema<UniversalCreditPersonLookupOutputWithMetadata> =
  s.lazySchema(() =>
    s.object<UniversalCreditPersonLookupOutputWithMetadata>(
      {
        ...universalCreditPersonLookupOutputWithMetadataProperties,
        name: s.optionalNullable(s.string().check(s.maxLength(128))),
        location: s.optionalNullable(s.string().check(s.maxLength(256))),
        city: s.optionalNullable(s.string().check(s.maxLength(128))),
        region: s.optionalNullable(s.string().check(s.maxLength(3))),
        countryCode: s.optionalNullable(s.string().check(s.maxLength(2))),
      },
      { additionalProperties: s.json() },
    ),
  );
