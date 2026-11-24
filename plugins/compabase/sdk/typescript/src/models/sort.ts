import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort = {
  Revenue: "revenue",
  ProfitNet: "profit_net",
  EstimatedValue: "estimated_value",
  TotalAssets: "total_assets",
  OperatingCostsTotal: "operating_costs_total",
  FixedAssets: "fixed_assets",
  CurrentAssets: "current_assets",
  Equity: "equity",
  LiabilitiesAndProvisions: "liabilities_and_provisions",
  Capital: "capital",
  RegistrationDate: "registration_date",
  RevenueGrowth: "revenue_growth",
  Name: "name",
  Nip: "nip",
  Regon: "regon",
  City: "city",
  Region: "region",
  PostalCode: "postal_code",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort] | (string & {});

export const sortSchema: EnumSchema<Sort> = s.enumOf<Sort>(Sort);
