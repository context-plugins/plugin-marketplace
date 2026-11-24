import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The broader category this type belongs to */
export const CategoryNordicFinancialNewsEventTypesApi = {
  Earnings: "earnings",
  Ma: "ma",
  ExecutiveChanges: "executive_changes",
  Regulatory: "regulatory",
  Dividends: "dividends",
  EquityActions: "equity_actions",
  Legal: "legal",
  Credit: "credit",
  Bankruptcy: "bankruptcy",
  Partnerships: "partnerships",
  Products: "products",
  Restructuring: "restructuring",
  Macro: "macro",
  Funding: "funding",
  Esg: "esg",
  Operations: "operations",
  AnalystRatings: "analyst_ratings",
  ShareholderActivity: "shareholder_activity",
  Other: "other",
  Commentary: "commentary",
} as const;
export type CategoryNordicFinancialNewsEventTypesApi =
  | (typeof CategoryNordicFinancialNewsEventTypesApi)[keyof typeof CategoryNordicFinancialNewsEventTypesApi]
  | (string & {});

export const categoryNordicFinancialNewsEventTypesApiSchema: EnumSchema<CategoryNordicFinancialNewsEventTypesApi> =
  s.enumOf<CategoryNordicFinancialNewsEventTypesApi>(CategoryNordicFinancialNewsEventTypesApi);
