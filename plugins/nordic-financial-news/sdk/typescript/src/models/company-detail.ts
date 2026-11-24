import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alsoListedOnSchema, type AlsoListedOn } from "./also-listed-on.js";
import { countrySchema, type Country } from "./country.js";
import { exchangeSchema, type Exchange } from "./exchange.js";
import { indexSchema, type Index } from "./index.js";
import { parentCompanySchema, type ParentCompany } from "./parent-company.js";
import { registrySchema, type Registry } from "./registry.js";
import { stockListingSchema, type StockListing } from "./stock-listing.js";
import { subsidiarySchema, type Subsidiary } from "./subsidiary.js";

export type CompanyDetail = {
  /** Unique company identifier */
  id: string;
  /** Company name */
  name: string;
  /** URL-friendly company name */
  slug: string;
  /** Primary stock ticker (null if unlisted) */
  ticker?: string | null;
  /**
   * Tickers the company was formerly listed under, from delisted or renamed listings, excluding any
   * that are still a current ticker. Always present; empty when none. The ticker filter resolves
   * former tickers as well as the current one, so a match on an old ticker still returns the
   * company; this field tells you the ticker you searched by is historical.
   */
  formerTickers: string[];
  /** Whether the company is currently active/operating */
  isActive?: boolean;
  /** Primary exchange where the company is listed */
  exchange?: Exchange | null;
  /**
   * The company's other active listings, excluding the primary listing above: cross-listings on
   * other exchanges and additional share classes (which may be on the same exchange). Always
   * present; empty when the company is single-listed or unlisted. The row's ticker/exchange fields
   * are the primary listing only. Company detail stock_listings is the authoritative full set.
   */
  alsoListedOn: AlsoListedOn[];
  /** Company description */
  description?: string | null;
  /** Industry sector */
  sector?: string | null;
  /** Company website */
  website?: string | null;
  /** Number of articles mentioning this company */
  articleCount?: number;
  /** Number of stories mentioning this company */
  storyCount?: number;
  /** Parent company, if this is a subsidiary */
  parentCompany?: ParentCompany | null;
  /** Subsidiary companies */
  subsidiaries?: Subsidiary[];
  /** Stock index memberships (e.g. OMXS30) */
  indices?: Index[];
  /** All stock listings across exchanges */
  stockListings?: StockListing[];
  /** Country where the company is domiciled */
  country?: Country | null;
  /**
   * Official company registry data from Nordic registries (e.g. Bolagsverket, PRH). Null if no
   * registry data exists.
   */
  registry?: Registry | null;
  /** When the company was last updated (ISO 8601) */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyDetailSchema: Schema<CompanyDetail> = s.object<CompanyDetail>(
  {
    id: s.string(),
    name: s.string(),
    slug: s.string(),
    ticker: s.optionalNullable(s.string()),
    formerTickers: s.array(s.string()),
    isActive: s.optional(s.boolean()),
    exchange: s.optionalNullable(s.lazy(() => exchangeSchema)),
    alsoListedOn: s.array(s.lazy(() => alsoListedOnSchema)),
    description: s.optionalNullable(s.string()),
    sector: s.optionalNullable(s.string()),
    website: s.optionalNullable(s.string()),
    articleCount: s.optional(s.int()),
    storyCount: s.optional(s.int()),
    parentCompany: s.optionalNullable(s.lazy(() => parentCompanySchema)),
    subsidiaries: s.optional(s.array(s.lazy(() => subsidiarySchema))),
    indices: s.optional(s.array(s.lazy(() => indexSchema))),
    stockListings: s.optional(s.array(s.lazy(() => stockListingSchema))),
    country: s.optionalNullable(s.lazy(() => countrySchema)),
    registry: s.optionalNullable(s.lazy(() => registrySchema)),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      formerTickers: "former_tickers",
      isActive: "is_active",
      alsoListedOn: "also_listed_on",
      articleCount: "article_count",
      storyCount: "story_count",
      parentCompany: "parent_company",
      stockListings: "stock_listings",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
