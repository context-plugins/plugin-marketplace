import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The issuer this event belongs to, inlined so a calendar can be rendered without a lookup per row.
 * `id` is the same value as `company_id`. `null` only when the issuer is not published by this API.
 */
export type CompanyNordicFinancialNewsCalendarEventsApi = {
  /** Unique company identifier */
  id?: string;
  /** Company name */
  name?: string;
  /** Primary stock ticker. `null` for an unlisted issuer. */
  ticker?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyNordicFinancialNewsCalendarEventsApiSchema: Schema<CompanyNordicFinancialNewsCalendarEventsApi> =
  s.object<CompanyNordicFinancialNewsCalendarEventsApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      ticker: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
