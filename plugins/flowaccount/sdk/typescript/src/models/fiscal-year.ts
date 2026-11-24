import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import { fiscalYearStatusSchema, type FiscalYearStatus } from "./fiscal-year-status.js";

export type FiscalYear = {
  id?: number;
  companyId?: number;
  beginPeriod?: Date;
  endPeriod?: Date;
  /** 1 = Current 3 = Opening 5 = Closed */
  status?: FiscalYearStatus;
  closedOn?: Date | null;
  closedBy?: number | null;
  createdOn?: Date;
  company?: Company;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fiscalYearProperties: s.Shape<FiscalYear> = {
  id: s.optional(s.int()),
  companyId: s.optional(s.int()),
  beginPeriod: s.optional(s.dateTime()),
  endPeriod: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => fiscalYearStatusSchema)),
  closedOn: s.optionalNullable(s.dateTime()),
  closedBy: s.optionalNullable(s.int()),
  createdOn: s.optional(s.dateTime()),
  company: s.optional(s.lazy(() => companyInternalSchema)),
};

export const fiscalYearInternalSchema: Schema<FiscalYear> = s.object<FiscalYear>(fiscalYearProperties, {
  additionalProperties: s.json(),
});

export const fiscalYearSchema: Schema<FiscalYear> = s.lazySchema(() =>
  s.object<FiscalYear>(
    {
      ...fiscalYearProperties,
      company: s.optional(s.lazy(() => companySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
