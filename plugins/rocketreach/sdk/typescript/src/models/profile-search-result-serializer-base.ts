import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusEnumSchema, type StatusEnum } from "./status-enum.js";
import { teaserSchema, type Teaser } from "./teaser.js";
import { typedDictSchema, type TypedDict } from "./typed-dict.js";

export type ProfileSearchResultSerializerBase = {
  /** RocketReach internal unique profile ID */
  id?: number;
  /** Status of the profile lookup */
  status?: StatusEnum;
  /** Name of the profile */
  name?: string | null;
  /**
   * profile_pic deprecated
   *
   * @deprecated
   */
  profilePic?: string | null;
  /** Social media links for the profile */
  links?: Record<string, unknown>;
  /** LinkedIn URL of the profile */
  linkedinUrl?: string | null;
  /** Number of LinkedIn connections for this profile */
  connections?: number;
  /** Location of the profile */
  location?: string | null;
  /** City of the profile */
  city?: string | null;
  /** Region of the profile */
  region?: string | null;
  /** Country code of the profile */
  country?: string;
  /** Country code of the profile */
  countryCode?: string | null;
  /** Current job title of the profile */
  currentTitle?: string | null;
  /** Current employer of the profile */
  currentEmployer?: string | null;
  /** Domain for the employer of the profile */
  currentEmployerDomain?: string | null;
  /** Website for the employer of the profile */
  currentEmployerWebsite?: string | null;
  /** Preview contact data for the profile */
  teaser?: Teaser | null;
  /** Year of birth of the profile */
  birthYear?: number;
  /** RocketReach internal unique company ID */
  currentEmployerId?: number;
  /** LinkedIn URL for the employer of the profile */
  currentEmployerLinkedinUrl?: string | null;
  /** Latitude of the region of the profile */
  regionLatitude?: number | null;
  /** Longitude of the region of the profile */
  regionLongitude?: number | null;
  /** Returns True if this profile is blocked by a suppression list filter */
  suppressed?: string;
  /** List of NPI data objects for the profile */
  npiData?: TypedDict;
  /** Timestamp of the last update for the profile */
  updateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const profileSearchResultSerializerBaseProperties: s.Shape<ProfileSearchResultSerializerBase> = {
  id: s.optional(s.int()),
  status: s.optional(s.lazy(() => statusEnumSchema)),
  name: s.optionalNullable(s.string()),
  profilePic: s.optionalNullable(s.string()),
  links: s.optional(s.record(s.string(), s.unknown())),
  linkedinUrl: s.optionalNullable(s.string()),
  connections: s.optional(s.int()),
  location: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  country: s.optional(s.string()),
  countryCode: s.optionalNullable(s.string()),
  currentTitle: s.optionalNullable(s.string()),
  currentEmployer: s.optionalNullable(s.string()),
  currentEmployerDomain: s.optionalNullable(s.string()),
  currentEmployerWebsite: s.optionalNullable(s.string()),
  teaser: s.optionalNullable(s.lazy(() => teaserSchema)),
  birthYear: s.optional(s.int()),
  currentEmployerId: s.optional(s.int()),
  currentEmployerLinkedinUrl: s.optionalNullable(s.string()),
  regionLatitude: s.optionalNullable(s.float64()),
  regionLongitude: s.optionalNullable(s.float64()),
  suppressed: s.optional(s.string()),
  npiData: s.optional(s.lazy(() => typedDictSchema)),
  updateTime: s.optional(s.dateTime()),
  _keysMap: {
    profilePic: "profile_pic",
    linkedinUrl: "linkedin_url",
    countryCode: "country_code",
    currentTitle: "current_title",
    currentEmployer: "current_employer",
    currentEmployerDomain: "current_employer_domain",
    currentEmployerWebsite: "current_employer_website",
    birthYear: "birth_year",
    currentEmployerId: "current_employer_id",
    currentEmployerLinkedinUrl: "current_employer_linkedin_url",
    regionLatitude: "region_latitude",
    regionLongitude: "region_longitude",
    npiData: "npi_data",
    updateTime: "update_time",
  },
};

export const profileSearchResultSerializerBaseInternalSchema: Schema<ProfileSearchResultSerializerBase> =
  s.object<ProfileSearchResultSerializerBase>(profileSearchResultSerializerBaseProperties, {
    additionalProperties: s.json(),
  });

export const profileSearchResultSerializerBaseSchema: Schema<ProfileSearchResultSerializerBase> =
  s.lazySchema(() =>
    s.object<ProfileSearchResultSerializerBase>(
      {
        ...profileSearchResultSerializerBaseProperties,
        name: s.optionalNullable(s.string().check(s.maxLength(128))),
        location: s.optionalNullable(s.string().check(s.maxLength(256))),
        city: s.optionalNullable(s.string().check(s.maxLength(128))),
        region: s.optionalNullable(s.string().check(s.maxLength(3))),
        countryCode: s.optionalNullable(s.string().check(s.maxLength(2))),
      },
      { additionalProperties: s.json() },
    ),
  );
