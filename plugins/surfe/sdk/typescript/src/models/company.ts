import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundingRoundSchema, type FundingRound } from "./funding-round.js";

export type Company = {
  name?: string;
  domain?: string;
  websites?: string[];
  description?: string;
  industry?: string;
  keywords?: string[];
  employeeCount?: number;
  revenue?: string;
  founded?: number;
  hqCountry?: string;
  hqAddress?: string;
  linkedInUrl?: string;
  linkedInFollowersCount?: number;
  phones?: string[];
  isPublic?: boolean;
  stockExchange?: string;
  stockSymbol?: string;
  fundingRounds?: FundingRound[];
  parentOrganization?: string;
  externalId?: string;
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySchema: Schema<Company> = s.object<Company>(
  {
    name: s.optional(s.string()),
    domain: s.optional(s.string()),
    websites: s.optional(s.array(s.string())),
    description: s.optional(s.string()),
    industry: s.optional(s.string()),
    keywords: s.optional(s.array(s.string())),
    employeeCount: s.optional(s.int()),
    revenue: s.optional(s.string()),
    founded: s.optional(s.int()),
    hqCountry: s.optional(s.string()),
    hqAddress: s.optional(s.string()),
    linkedInUrl: s.optional(s.string()),
    linkedInFollowersCount: s.optional(s.int()),
    phones: s.optional(s.array(s.string())),
    isPublic: s.optional(s.boolean()),
    stockExchange: s.optional(s.string()),
    stockSymbol: s.optional(s.string()),
    fundingRounds: s.optional(s.array(s.lazy(() => fundingRoundSchema))),
    parentOrganization: s.optional(s.string()),
    externalId: s.optional(s.string()),
    status: s.optional(s.string()),
    _keysMap: {
      externalId: "externalID",
    },
  },
  { additionalProperties: s.json() },
);
