import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Companies most strongly associated with the story. */
export type CompanyHolder = {
  /** Unique Perigon identifier for the company. */
  id?: string | null;
  /** Company name. */
  name?: string | null;
  /** Domains associated with the company. */
  domains?: string[] | null;
  /** Stock symbols associated with the company. */
  symbols?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyHolderSchema: Schema<CompanyHolder> = s.object<CompanyHolder>(
  {
    id: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    domains: s.optionalNullable(s.array(s.string())),
    symbols: s.optionalNullable(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
