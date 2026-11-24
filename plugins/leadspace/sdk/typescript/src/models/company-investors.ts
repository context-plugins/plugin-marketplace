import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyInvestors = {
  cbUrl?: string;
  lastInvestorName?: string;
  companyInvestors?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyInvestorsSchema: Schema<CompanyInvestors> = s.object<CompanyInvestors>(
  {
    cbUrl: s.optional(s.string()),
    lastInvestorName: s.optional(s.string()),
    companyInvestors: s.optional(s.string()),
    _keysMap: {
      cbUrl: "cb_url",
      lastInvestorName: "last_investor_name",
      companyInvestors: "company_investors",
    },
  },
  { additionalProperties: s.json() },
);
