import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  associationTierNordicFinancialNewsEventsApiSchema,
  type AssociationTierNordicFinancialNewsEventsApi,
} from "./association-tier-nordic-financial-news-events-api.js";

export type CompanyNordicFinancialNewsEventsApi = {
  /** Unique company identifier */
  id: string;
  /** Company name */
  name: string;
  /** Primary stock ticker */
  ticker?: string | null;
  /** Whether this company is the primary subject of the event */
  isPrimary: boolean;
  /**
   * How the company relates to the event. `principal` (subject, acquirer, target, investor, issuer,
   * partner) is the default set; `peripheral` (advisor, speaker, passing mention) appears only when
   * `include_peripheral=true`. Always present.
   */
  associationTier: AssociationTierNordicFinancialNewsEventsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyNordicFinancialNewsEventsApiSchema: Schema<CompanyNordicFinancialNewsEventsApi> =
  s.object<CompanyNordicFinancialNewsEventsApi>(
    {
      id: s.string(),
      name: s.string(),
      ticker: s.optionalNullable(s.string()),
      isPrimary: s.boolean(),
      associationTier: associationTierNordicFinancialNewsEventsApiSchema,
      _keysMap: {
        isPrimary: "is_primary",
        associationTier: "association_tier",
      },
    },
    { additionalProperties: s.json() },
  );
