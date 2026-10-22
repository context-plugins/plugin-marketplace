import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Company = {
  /** User-friendly display name. */
  name: string;
  /** Link to internal company company profile. */
  profileUrl?: string;
  /** Link to company's associated websites. */
  websiteUrls?: string[];
  /**
   * The URL of the company's logo. Public, Glean-authenticated and Base64 encoded data URLs are all
   * valid (but not third-party-authenticated URLs).
   */
  logoUrl?: string;
  /** User facing string representing the company's location. */
  location?: string;
  /** Phone number as a number string. */
  phone?: string;
  /** Fax number as a number string. */
  fax?: string;
  /** User facing string representing the company's industry. */
  industry?: string;
  /** Average company's annual revenue for reference. */
  annualRevenue?: number;
  /** Average company's number of employees for reference. */
  numberOfEmployees?: number;
  /** Company's stock symbol if company is public. */
  stockSymbol?: string;
  /** The date when the company was founded. */
  foundedDate?: string;
  /** User facing description of company. */
  about?: string;
};

export const companySchema: Schema<Company> = s.object<Company>({
  name: s.string(),
  profileUrl: s.optional(s.string()),
  websiteUrls: s.optional(s.array(s.string())),
  logoUrl: s.optional(s.string()),
  location: s.optional(s.string()),
  phone: s.optional(s.string()),
  fax: s.optional(s.string()),
  industry: s.optional(s.string()),
  annualRevenue: s.optional(s.float64()),
  numberOfEmployees: s.optional(s.int()),
  stockSymbol: s.optional(s.string()),
  foundedDate: s.optional(s.dateOnly()),
  about: s.optional(s.string()),
});
