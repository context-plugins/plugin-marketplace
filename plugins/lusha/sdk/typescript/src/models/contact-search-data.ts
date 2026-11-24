import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactSearchData = {
  /** A unique serial contact ID generated for each search response */
  contactId?: string;
  /** Indicates whether the contact was already revealed by any of the account users */
  isShown?: boolean;
  /** The full name of the contact */
  name?: string;
  /** The job title held by the person at their current company */
  jobTitle?: string;
  /** A unique identifier for a Lusha company */
  companyId?: number;
  /** The name of the company where the person currently works */
  companyName?: string;
  /** The fqdn of the company */
  fqdn?: string;
  hasCompanyEmployeesCount?: boolean;
  hasCompanyRevenue?: boolean;
  hasCompanyMainIndustry?: boolean;
  hasCompanySubIndustry?: boolean;
  hasCompanyFunding?: boolean;
  hasCompanyIntent?: boolean;
  hasCompanyTechnologies?: boolean;
  hasDepartment?: boolean;
  hasSeniority?: boolean;
  hasContactLocation?: boolean;
  hasSocialLink?: boolean;
  hasEmails?: boolean;
  hasWorkEmail?: boolean;
  hasPrivateEmail?: boolean;
  hasPhones?: boolean;
  hasMobilePhone?: boolean;
  hasDirectPhone?: boolean;
  hasCompanyCity?: boolean;
  hasCompanyCountry?: boolean;
  /** Types of signals detected for this contact */
  signalTypes?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSearchDataSchema: Schema<ContactSearchData> = s.object<ContactSearchData>(
  {
    contactId: s.optional(s.string()),
    isShown: s.optional(s.boolean()),
    name: s.optional(s.string()),
    jobTitle: s.optional(s.string()),
    companyId: s.optional(s.float64()),
    companyName: s.optional(s.string()),
    fqdn: s.optional(s.string()),
    hasCompanyEmployeesCount: s.optional(s.boolean()),
    hasCompanyRevenue: s.optional(s.boolean()),
    hasCompanyMainIndustry: s.optional(s.boolean()),
    hasCompanySubIndustry: s.optional(s.boolean()),
    hasCompanyFunding: s.optional(s.boolean()),
    hasCompanyIntent: s.optional(s.boolean()),
    hasCompanyTechnologies: s.optional(s.boolean()),
    hasDepartment: s.optional(s.boolean()),
    hasSeniority: s.optional(s.boolean()),
    hasContactLocation: s.optional(s.boolean()),
    hasSocialLink: s.optional(s.boolean()),
    hasEmails: s.optional(s.boolean()),
    hasWorkEmail: s.optional(s.boolean()),
    hasPrivateEmail: s.optional(s.boolean()),
    hasPhones: s.optional(s.boolean()),
    hasMobilePhone: s.optional(s.boolean()),
    hasDirectPhone: s.optional(s.boolean()),
    hasCompanyCity: s.optional(s.boolean()),
    hasCompanyCountry: s.optional(s.boolean()),
    signalTypes: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
