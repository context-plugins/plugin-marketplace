import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Company = {
  id?: number;
  name?: string;
  website?: string;
  domain?: string;
  industry?: string;
  type?: string;
  founded?: number;
  size?: string;
  employeesCount?: number;
  followersCount?: number;
  description?: string;
  headquarters?: string;
  country?: string;
  region?: string;
  locality?: string;
  specialities?: string[];
  technologies?: string[];
  fundingTotalAmount?: number;
  lastFundingRound?: Record<string, unknown>;
  linkedinUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  crunchbaseUrl?: string;
  lastUpdated?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyProperties: s.Shape<Company> = {
  id: s.optional(s.int()),
  name: s.optional(s.string()),
  website: s.optional(s.string()),
  domain: s.optional(s.string()),
  industry: s.optional(s.string()),
  type: s.optional(s.string()),
  founded: s.optional(s.int()),
  size: s.optional(s.string()),
  employeesCount: s.optional(s.int()),
  followersCount: s.optional(s.int()),
  description: s.optional(s.string()),
  headquarters: s.optional(s.string()),
  country: s.optional(s.string()),
  region: s.optional(s.string()),
  locality: s.optional(s.string()),
  specialities: s.optional(s.array(s.string())),
  technologies: s.optional(s.array(s.string())),
  fundingTotalAmount: s.optional(s.float64()),
  lastFundingRound: s.optional(s.record(s.string(), s.unknown())),
  linkedinUrl: s.optional(s.string()),
  twitterUrl: s.optional(s.string()),
  facebookUrl: s.optional(s.string()),
  crunchbaseUrl: s.optional(s.string()),
  lastUpdated: s.optional(s.dateTime()),
  _keysMap: {
    employeesCount: "employees_count",
    followersCount: "followers_count",
    fundingTotalAmount: "funding_total_amount",
    lastFundingRound: "last_funding_round",
    linkedinUrl: "linkedin_url",
    twitterUrl: "twitter_url",
    facebookUrl: "facebook_url",
    crunchbaseUrl: "crunchbase_url",
    lastUpdated: "last_updated",
  },
};

export const companyInternalSchema: Schema<Company> = s.object<Company>(companyProperties, {
  additionalProperties: s.json(),
});

export const companySchema: Schema<Company> = s.lazySchema(() =>
  s.object<Company>(
    {
      ...companyProperties,
      website: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
