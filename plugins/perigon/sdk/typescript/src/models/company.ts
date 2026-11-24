import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { symbolHolderSchema, type SymbolHolder } from "./symbol-holder.js";
import { webResourcesSchema, type WebResources } from "./web-resources.js";

export type Company = {
  id?: string | null;
  name?: string | null;
  updatedAt?: string | null;
  primaryRecordId?: string | null;
  altNames?: string[] | null;
  domains?: string[] | null;
  monthlyVisits?: number | null;
  globalRank?: number | null;
  description?: string | null;
  ceo?: string | null;
  industry?: string | null;
  sector?: string | null;
  country?: string | null;
  fullTimeEmployees?: number | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  logo?: string | null;
  favicon?: string | null;
  isEtf?: boolean | null;
  isActivelyTrading?: boolean | null;
  isFund?: boolean | null;
  isAdr?: boolean | null;
  symbols?: SymbolHolder[] | null;
  naics?: string | null;
  sic?: string | null;
  cusip?: string | null;
  cik?: string | null;
  isin?: string | null;
  yearFounded?: number | null;
  revenue?: string | null;
  webResources?: WebResources;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySchema: Schema<Company> = s.object<Company>(
  {
    id: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    updatedAt: s.optionalNullable(s.string()),
    primaryRecordId: s.optionalNullable(s.string()),
    altNames: s.optionalNullable(s.array(s.string())),
    domains: s.optionalNullable(s.array(s.string())),
    monthlyVisits: s.optionalNullable(s.int()),
    globalRank: s.optionalNullable(s.int()),
    description: s.optionalNullable(s.string()),
    ceo: s.optionalNullable(s.string()),
    industry: s.optionalNullable(s.string()),
    sector: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    fullTimeEmployees: s.optionalNullable(s.int()),
    address: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    zip: s.optionalNullable(s.string()),
    logo: s.optionalNullable(s.string()),
    favicon: s.optionalNullable(s.string()),
    isEtf: s.optionalNullable(s.boolean()),
    isActivelyTrading: s.optionalNullable(s.boolean()),
    isFund: s.optionalNullable(s.boolean()),
    isAdr: s.optionalNullable(s.boolean()),
    symbols: s.optionalNullable(s.array(s.lazy(() => symbolHolderSchema))),
    naics: s.optionalNullable(s.string()),
    sic: s.optionalNullable(s.string()),
    cusip: s.optionalNullable(s.string()),
    cik: s.optionalNullable(s.string()),
    isin: s.optionalNullable(s.string()),
    yearFounded: s.optionalNullable(s.int()),
    revenue: s.optionalNullable(s.string()),
    webResources: s.optional(s.lazy(() => webResourcesSchema)),
  },
  { additionalProperties: s.json() },
);
