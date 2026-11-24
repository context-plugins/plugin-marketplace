import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Lifecycle status. `active`/`closed` are live (closed = coverage window lapsed but the event stays
 * visible and can reopen). `merged` = absorbed into another event (see `merged_into`); `removed` =
 * withdrawn from the feed (no live articles remain, or it was found to be incorrect).
 * `merged`/`removed` never appear in the default list and carry only the tombstone fields.
 */
export const StatusNordicFinancialNewsCompaniesApi = {
  Active: "active",
  Closed: "closed",
  Merged: "merged",
  Removed: "removed",
} as const;
export type StatusNordicFinancialNewsCompaniesApi =
  | (typeof StatusNordicFinancialNewsCompaniesApi)[keyof typeof StatusNordicFinancialNewsCompaniesApi]
  | (string & {});

export const statusNordicFinancialNewsCompaniesApiSchema: EnumSchema<StatusNordicFinancialNewsCompaniesApi> =
  s.enumOf<StatusNordicFinancialNewsCompaniesApi>(StatusNordicFinancialNewsCompaniesApi);
