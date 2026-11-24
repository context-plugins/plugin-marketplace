import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fiscalYear1Schema, type FiscalYear1 } from "./unions/fiscal-year1.js";
import { funderCountSchema, type FunderCount } from "./unions/funder-count.js";
import { grantCountSchema, type GrantCount } from "./unions/grant-count.js";
import { totalAmountSchema, type TotalAmount } from "./unions/total-amount.js";

export type SummaryByYear = {
  fiscalYear?: FiscalYear1;
  totalAmount?: TotalAmount;
  grantCount?: GrantCount;
  funderCount?: FunderCount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summaryByYearSchema: Schema<SummaryByYear> = s.object<SummaryByYear>(
  {
    fiscalYear: s.optional(s.lazy(() => fiscalYear1Schema)),
    totalAmount: s.optional(s.lazy(() => totalAmountSchema)),
    grantCount: s.optional(s.lazy(() => grantCountSchema)),
    funderCount: s.optional(s.lazy(() => funderCountSchema)),
    _keysMap: {
      fiscalYear: "fiscal_year",
      totalAmount: "total_amount",
      grantCount: "grant_count",
      funderCount: "funder_count",
    },
  },
  { additionalProperties: s.json() },
);
