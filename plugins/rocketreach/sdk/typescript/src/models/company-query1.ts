import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Search query object for the request */
export type CompanyQuery1 = {
  companyTag?: string[];
  /** Include companies with these compeitiors */
  competitors?: string[];
  /** Include companies with these descriptions */
  description?: string[];
  /** Include companies with these domains */
  domain?: string[];
  /** Include companies with these email domains */
  emailDomain?: string[];
  /** Include companies with this number of employees */
  employees?: string[];
  extendedKeyword?: string[];
  /** Include companies located in these geographies */
  geo?: string[];
  /**
   * Include growth numbers for specific departments and time ranges. <b>Format:</b>
   * `min_percentage_growth-max_percentage_growth::Department,TimeRange`
   * * min_percentage_growth: Minimum growth percentage to filter companies
   * * max_percentage_growth: Maximum growth percentage to filter companies
   * * Department: Name of the company department (e.g., Engineering, Sales)
   * * TimeRange: Duration for the growth metric (e.g., six_months, one_year)
   * - Example: `['5-30::Engineering,six_months']`
   * - Example: `['-10--20::Sales,one_year']`
   */
  growth?: string[];
  /** Include companies with these RocketReach company IDs */
  id?: string[];
  /** Include companies focused in these industries */
  industry?: string[];
  /** Include companies focused in industries with these keywords */
  industryKeywords?: string[];
  /** Include companies focused in industries with these tags */
  industryTags?: string[];
  /**
   * Search across 37,000 intent topics found
   * [here](https://docs.google.com/spreadsheets/d/1nnk8ZOLr9GUzrPNy1pG_N_gVIhDpkc5XjE3Hh4J8M00/edit?gid=761283207#gid=761283207).
   * Intent is only available on certain plans. Please reach out to our team to learn more.
   */
  intent?: string[];
  isPrimary?: string[];
  /**
   * Hiring signals that identify companies that are actively building out specific departments.
   * Full list of categories
   * [here](https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=2100271042#gid=2100271042).
   * - Example: `['Accounting Roles::one_month']`
   */
  jobPostingSignal?: string[];
  keyword?: string[];
  /** Include companies listed with these links */
  link?: string[];
  /** Include companies located in these locations */
  location?: string[];
  /** Include companies with these NAICS codes */
  naicsCode?: string[];
  /** Include companies with these names */
  name?: string[];
  /**
   * Search on news events within the 25 categories listed
   * [here](https://docs.google.com/spreadsheets/d/1EZPVnOftbHNwDm0aXjiJ79dSpqcZ4JLnrNJPZxKXi5Q/edit?gid=577464958#gid=577464958").
   * - Example: `['Funding::one_month']`
   */
  newsSignal?: string[];
  /**
   * news_timestamp deprecated, please use `news_signal`
   *
   * @deprecated
   */
  newsTimestamp?: string[];
  /** Include companies with these phone numbers */
  phone?: string[];
  /** Include companies focues in these primary industries */
  primaryIndustry?: string[];
  /** Include companies that are publically traded */
  publiclyTraded?: string[];
  /** Include companies with these revenue values */
  revenue?: string[];
  /** Include companies with these SIC codes */
  sicCode?: string[];
  simplifiedKeyword?: string[];
  /** Include companies working in these techstacks */
  techstack?: string[];
  /** Include companies who have raised this amount of capital */
  totalFunding?: string[];
  /** Include companies with websites in these categories */
  websiteCategory?: string[];
  /** Include companies with these website URLs */
  websiteUrl?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyQuery1Schema: Schema<CompanyQuery1> = s.object<CompanyQuery1>(
  {
    companyTag: s.optional(s.array(s.string())),
    competitors: s.optional(s.array(s.string())),
    description: s.optional(s.array(s.string())),
    domain: s.optional(s.array(s.string())),
    emailDomain: s.optional(s.array(s.string())),
    employees: s.optional(s.array(s.string())),
    extendedKeyword: s.optional(s.array(s.string())),
    geo: s.optional(s.array(s.string())),
    growth: s.optional(s.array(s.string())),
    id: s.optional(s.array(s.string())),
    industry: s.optional(s.array(s.string())),
    industryKeywords: s.optional(s.array(s.string())),
    industryTags: s.optional(s.array(s.string())),
    intent: s.optional(s.array(s.string())),
    isPrimary: s.optional(s.array(s.string())),
    jobPostingSignal: s.optional(s.array(s.string())),
    keyword: s.optional(s.array(s.string())),
    link: s.optional(s.array(s.string())),
    location: s.optional(s.array(s.string())),
    naicsCode: s.optional(s.array(s.string())),
    name: s.optional(s.array(s.string())),
    newsSignal: s.optional(s.array(s.string())),
    newsTimestamp: s.optional(s.array(s.string())),
    phone: s.optional(s.array(s.string())),
    primaryIndustry: s.optional(s.array(s.string())),
    publiclyTraded: s.optional(s.array(s.string())),
    revenue: s.optional(s.array(s.string())),
    sicCode: s.optional(s.array(s.string())),
    simplifiedKeyword: s.optional(s.array(s.string())),
    techstack: s.optional(s.array(s.string())),
    totalFunding: s.optional(s.array(s.string())),
    websiteCategory: s.optional(s.array(s.string())),
    websiteUrl: s.optional(s.array(s.string())),
    _keysMap: {
      companyTag: "company_tag",
      emailDomain: "email_domain",
      extendedKeyword: "extended_keyword",
      industryKeywords: "industry_keywords",
      industryTags: "industry_tags",
      isPrimary: "is_primary",
      jobPostingSignal: "job_posting_signal",
      naicsCode: "naics_code",
      newsSignal: "news_signal",
      newsTimestamp: "news_timestamp",
      primaryIndustry: "primary_industry",
      publiclyTraded: "publicly_traded",
      sicCode: "sic_code",
      simplifiedKeyword: "simplified_keyword",
      totalFunding: "total_funding",
      websiteCategory: "website_category",
      websiteUrl: "website_url",
    },
  },
  { additionalProperties: s.json() },
);
