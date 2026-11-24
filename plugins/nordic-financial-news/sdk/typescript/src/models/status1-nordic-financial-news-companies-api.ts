import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Event lifecycle status. `scheduled` is upcoming; `published` means the event has occurred (events
 * flip ~2 days after their date); `cancelled` means the issuer withdrew it. List endpoints return
 * `scheduled` + `published` and exclude `cancelled` by default. Pass the `status` query parameter
 * to filter (e.g. `status=cancelled`).
 */
export const Status1NordicFinancialNewsCompaniesApi = {
  Scheduled: "scheduled",
  Published: "published",
  Cancelled: "cancelled",
} as const;
export type Status1NordicFinancialNewsCompaniesApi =
  | (typeof Status1NordicFinancialNewsCompaniesApi)[keyof typeof Status1NordicFinancialNewsCompaniesApi]
  | (string & {});

export const status1NordicFinancialNewsCompaniesApiSchema: EnumSchema<Status1NordicFinancialNewsCompaniesApi> =
  s.enumOf<Status1NordicFinancialNewsCompaniesApi>(Status1NordicFinancialNewsCompaniesApi);
