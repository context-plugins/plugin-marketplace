import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { LookupTypeEnum, lookupTypeEnumSchema } from "./lookup-type-enum.js";

export type ProfileMatch = {
  /**
   * RocketReach internal unique profile ID.
   * - Example: `123456`
   */
  id?: number;
  /**
   * Name of the desired profile. Must specify along with `current_employer`.
   * - Example: `Jamie Gullbrand`
   */
  name?: string;
  /**
   * Current employer of the desired profile. Must specify along with `name`.
   * - Example: `RocketReach`
   */
  currentEmployer?: string;
  /**
   * Job title of the desired profile.
   * - Example: `Product Manager`
   */
  title?: string;
  /**
   * linkedin_ext_url deprecated, please use `linkedin_url`
   *
   * @deprecated
   */
  linkedinExtUrl?: string;
  /**
   * LinkedIn URL of the desired profile.
   * - Example: `www.linkedin.com/in/jamesgullbrand`
   */
  linkedinUrl?: string;
  /**
   * An email address for the desired profile.
   * - Example: `jamie@rocketreach.co`
   */
  email?: string;
  /**
   * A phone number for the desired profile in either E.164 format or international format.
   * - Example: `+15555555555`
   */
  phone?: string;
  /**
   * An NPI number for the desired profile (US healthcare professional)
   * - Example: `1234567890`
   */
  npiNumber?: number;
  /**
   * Lookup type for the request
   *
   * * `standard` - standard
   * * `premium` - premium
   * * `premium (feeds disabled)` - premium (feeds disabled)
   * * `bulk` - bulk
   * * `phone` - phone
   * * `enrich` - enrich
   *
   * @default LookupTypeEnum.Standard
   */
  lookupType?: LookupTypeEnum;
  /** User metadata about the profile, such as external ids, tags, notes, etc. */
  metadata?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const profileMatchProperties: s.Shape<ProfileMatch> = {
  id: s.optional(s.int()),
  name: s.optional(s.string()),
  currentEmployer: s.optional(s.string()),
  title: s.optional(s.string()),
  linkedinExtUrl: s.optional(s.string()),
  linkedinUrl: s.optional(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  npiNumber: s.optional(s.int()),
  lookupType: s.defaulted(lookupTypeEnumSchema, LookupTypeEnum.Standard),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    currentEmployer: "current_employer",
    linkedinExtUrl: "linkedin_ext_url",
    linkedinUrl: "linkedin_url",
    npiNumber: "npi_number",
    lookupType: "lookup_type",
  },
};

export const profileMatchInternalSchema: Schema<ProfileMatch> = s.object<ProfileMatch>(
  profileMatchProperties,
  { additionalProperties: s.json() },
);

export const profileMatchSchema: Schema<ProfileMatch> = s.lazySchema(() =>
  s.object<ProfileMatch>(
    {
      ...profileMatchProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
