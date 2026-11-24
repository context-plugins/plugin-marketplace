import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reveal1Schema, type Reveal1 } from "./reveal1.js";

export type V3CompaniesEnrichRequest = {
  /** Company IDs from search results (strings) */
  ids: string[];
  /**
   * Additional data fields to reveal. Each field is charged separately per result.
   * - `employeesByDepartment` — breakdown of employees by department
   * - `employeesByLocation` — breakdown of employees by country/state
   * - `employeesBySeniority` — breakdown of employees by seniority level
   * - `competitors` — list of competitor company IDs
   * - `intent` — buyer intent topics
   * - `estimatedAnnualItSpend` — estimated annual IT spend. 1 credit per company, charged only when
   *   a non-null value is returned.
   * - `monthlyWebsiteTraffic` — monthly website traffic and month-over-month change. 1 credit per
   *   company, charged only when a non-null value is returned.
   */
  reveal?: Reveal1[];
  /**
   * Optional. If provided, these companies are also added to this table (if not already present)
   * and the revealed fields' columns are populated. See the Tables API.
   */
  tableId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3CompaniesEnrichRequestProperties: s.Shape<V3CompaniesEnrichRequest> = {
  ids: s.array(s.string()),
  reveal: s.optional(s.array(s.lazy(() => reveal1Schema))),
  tableId: s.optional(s.string()),
};

export const v3CompaniesEnrichRequestInternalSchema: Schema<V3CompaniesEnrichRequest> =
  s.object<V3CompaniesEnrichRequest>(v3CompaniesEnrichRequestProperties, { additionalProperties: s.json() });

export const v3CompaniesEnrichRequestSchema: Schema<V3CompaniesEnrichRequest> = s.lazySchema(() =>
  s.object<V3CompaniesEnrichRequest>(
    {
      ...v3CompaniesEnrichRequestProperties,
      ids: s.array(s.string()).check(s.minLength(1), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
