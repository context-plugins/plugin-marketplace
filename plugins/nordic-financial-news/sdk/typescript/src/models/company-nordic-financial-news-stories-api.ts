import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyNordicFinancialNewsStoriesApi = {
  /** Unique company identifier */
  id?: string;
  /** Company name */
  name?: string;
  /** Primary stock ticker */
  ticker?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyNordicFinancialNewsStoriesApiSchema: Schema<CompanyNordicFinancialNewsStoriesApi> =
  s.object<CompanyNordicFinancialNewsStoriesApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      ticker: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
