import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Row from `company_search` (fields depend on query path) plus enrichment: `email`, `website`,
 * `logo_url`, `currency`, `period_to`, and normalized `company_name_display`. `full_address` is
 * derived from postal data when present.
 */
export type CompanyListItem = {
  entityId?: string;
  companyName?: string;
  companyNameDisplay?: string | null;
  registryNumber?: string | null;
  nip?: string | null;
  regon?: string | null;
  legalForm?: string | null;
  city?: string | null;
  postalCode?: string | null;
  county?: string | null;
  municipality?: string | null;
  region?: string | null;
  fullAddress?: string | null;
  primaryPkd?: string | null;
  allPkdCodes?: string[];
  isActive?: boolean | null;
  latestSnapshotId?: string | null;
  revenueTotal?: number | null;
  revenueTotalUsd?: number | null;
  revenueOperating?: number | null;
  profitOperating?: number | null;
  profitNet?: number | null;
  profitNetUsd?: number | null;
  operatingCostsTotal?: number | null;
  incomeTax?: number | null;
  costWages?: number | null;
  costAmortization?: number | null;
  totalAssets?: number | null;
  capitalTotal?: number | null;
  hasEmail?: boolean | null;
  hasWebsite?: boolean | null;
  extractedAt?: Date | null;
  stateDate?: string | null;
  email?: string | null;
  website?: string | null;
  logoUrl?: string | null;
  currency?: string | null;
  periodTo?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyListItemSchema: Schema<CompanyListItem> = s.object<CompanyListItem>(
  {
    entityId: s.optional(s.string()),
    companyName: s.optional(s.string()),
    companyNameDisplay: s.optionalNullable(s.string()),
    registryNumber: s.optionalNullable(s.string()),
    nip: s.optionalNullable(s.string()),
    regon: s.optionalNullable(s.string()),
    legalForm: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    postalCode: s.optionalNullable(s.string()),
    county: s.optionalNullable(s.string()),
    municipality: s.optionalNullable(s.string()),
    region: s.optionalNullable(s.string()),
    fullAddress: s.optionalNullable(s.string()),
    primaryPkd: s.optionalNullable(s.string()),
    allPkdCodes: s.optional(s.array(s.string())),
    isActive: s.optionalNullable(s.boolean()),
    latestSnapshotId: s.optionalNullable(s.string()),
    revenueTotal: s.optionalNullable(s.float64()),
    revenueTotalUsd: s.optionalNullable(s.float64()),
    revenueOperating: s.optionalNullable(s.float64()),
    profitOperating: s.optionalNullable(s.float64()),
    profitNet: s.optionalNullable(s.float64()),
    profitNetUsd: s.optionalNullable(s.float64()),
    operatingCostsTotal: s.optionalNullable(s.float64()),
    incomeTax: s.optionalNullable(s.float64()),
    costWages: s.optionalNullable(s.float64()),
    costAmortization: s.optionalNullable(s.float64()),
    totalAssets: s.optionalNullable(s.float64()),
    capitalTotal: s.optionalNullable(s.float64()),
    hasEmail: s.optionalNullable(s.boolean()),
    hasWebsite: s.optionalNullable(s.boolean()),
    extractedAt: s.optionalNullable(s.dateTime()),
    stateDate: s.optionalNullable(s.dateOnly()),
    email: s.optionalNullable(s.string()),
    website: s.optionalNullable(s.string()),
    logoUrl: s.optionalNullable(s.string()),
    currency: s.optionalNullable(s.string()),
    periodTo: s.optionalNullable(s.string()),
    _keysMap: {
      entityId: "entity_id",
      companyName: "company_name",
      companyNameDisplay: "company_name_display",
      registryNumber: "registry_number",
      legalForm: "legal_form",
      postalCode: "postal_code",
      fullAddress: "full_address",
      primaryPkd: "primary_pkd",
      allPkdCodes: "all_pkd_codes",
      isActive: "is_active",
      latestSnapshotId: "latest_snapshot_id",
      revenueTotal: "revenue_total",
      revenueTotalUsd: "revenue_total_usd",
      revenueOperating: "revenue_operating",
      profitOperating: "profit_operating",
      profitNet: "profit_net",
      profitNetUsd: "profit_net_usd",
      operatingCostsTotal: "operating_costs_total",
      incomeTax: "income_tax",
      costWages: "cost_wages",
      costAmortization: "cost_amortization",
      totalAssets: "total_assets",
      capitalTotal: "capital_total",
      hasEmail: "has_email",
      hasWebsite: "has_website",
      extractedAt: "extracted_at",
      stateDate: "state_date",
      logoUrl: "logo_url",
      periodTo: "period_to",
    },
  },
  { additionalProperties: s.json() },
);
