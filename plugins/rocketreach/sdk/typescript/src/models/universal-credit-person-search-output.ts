import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teaser1Schema, type Teaser1 } from "./teaser1.js";

export type UniversalCreditPersonSearchOutput = {
  /** RocketReach internal unique profile ID */
  id?: number;
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
  /** TDomain for the employer of the profile */
  currentEmployerDomain?: string | null;
  /** Website for the employer of the profile */
  currentEmployerWebsite?: string | null;
  teaser?: Teaser1 | null;
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
  /** Timestamp of the last update for the profile */
  updateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const universalCreditPersonSearchOutputProperties: s.Shape<UniversalCreditPersonSearchOutput> = {
  id: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  profilePic: s.optionalNullable(s.string()),
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
  teaser: s.optionalNullable(s.lazy(() => teaser1Schema)),
  birthYear: s.optional(s.int()),
  currentEmployerId: s.optional(s.int()),
  currentEmployerLinkedinUrl: s.optionalNullable(s.string()),
  regionLatitude: s.optionalNullable(s.float64()),
  regionLongitude: s.optionalNullable(s.float64()),
  suppressed: s.optional(s.string()),
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
    updateTime: "update_time",
  },
};

export const universalCreditPersonSearchOutputInternalSchema: Schema<UniversalCreditPersonSearchOutput> =
  s.object<UniversalCreditPersonSearchOutput>(universalCreditPersonSearchOutputProperties, {
    additionalProperties: s.json(),
  });

export const universalCreditPersonSearchOutputSchema: Schema<UniversalCreditPersonSearchOutput> =
  s.lazySchema(() =>
    s.object<UniversalCreditPersonSearchOutput>(
      {
        ...universalCreditPersonSearchOutputProperties,
        name: s.optionalNullable(s.string().check(s.maxLength(128))),
        location: s.optionalNullable(s.string().check(s.maxLength(256))),
        city: s.optionalNullable(s.string().check(s.maxLength(128))),
        region: s.optionalNullable(s.string().check(s.maxLength(3))),
        countryCode: s.optionalNullable(s.string().check(s.maxLength(2))),
      },
      { additionalProperties: s.json() },
    ),
  );
