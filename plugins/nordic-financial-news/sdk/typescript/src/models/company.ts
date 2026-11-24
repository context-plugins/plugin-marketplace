import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { associationTierSchema, type AssociationTier } from "./association-tier.js";

export type Company = {
  /** Unique company identifier */
  id: string;
  /** Company name */
  name: string;
  /** Primary stock ticker */
  ticker?: string | null;
  /** Whether this company is the primary subject of the article */
  isPrimary: boolean;
  /**
   * How the company relates to the article. `principal` (subject, partner, investor, competitor) is
   * the default set; `peripheral` (source, advisor, passing mention) appears only when
   * `include_peripheral=true`. Always present.
   */
  associationTier: AssociationTier;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySchema: Schema<Company> = s.object<Company>(
  {
    id: s.string(),
    name: s.string(),
    ticker: s.optionalNullable(s.string()),
    isPrimary: s.boolean(),
    associationTier: associationTierSchema,
    _keysMap: {
      isPrimary: "is_primary",
      associationTier: "association_tier",
    },
  },
  { additionalProperties: s.json() },
);
