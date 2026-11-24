import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Companies associated with the story and their article counts. */
export type CompanyCount = {
  /** Unique Perigon identifier for the company. */
  id?: string | null;
  /** Company name. */
  name?: string | null;
  /** Domains associated with the company. */
  domains?: string[] | null;
  /** Stock symbols associated with the company. */
  symbols?: string[] | null;
  /** Number of story articles mentioning the company. */
  count?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyCountSchema: Schema<CompanyCount> = s.object<CompanyCount>(
  {
    id: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    domains: s.optionalNullable(s.array(s.string())),
    symbols: s.optionalNullable(s.array(s.string())),
    count: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
