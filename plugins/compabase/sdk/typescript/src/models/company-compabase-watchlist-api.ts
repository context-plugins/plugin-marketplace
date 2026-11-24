import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyCompabaseWatchlistApi = {
  entityId?: string | null;
  name?: string | null;
  krs?: string | null;
  nip?: string | null;
  city?: string | null;
  isActive?: boolean | null;
  revenueTotal?: number | null;
  profitNet?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyCompabaseWatchlistApiSchema: Schema<CompanyCompabaseWatchlistApi> =
  s.object<CompanyCompabaseWatchlistApi>(
    {
      entityId: s.optionalNullable(s.string()),
      name: s.optionalNullable(s.string()),
      krs: s.optionalNullable(s.string()),
      nip: s.optionalNullable(s.string()),
      city: s.optionalNullable(s.string()),
      isActive: s.optionalNullable(s.boolean()),
      revenueTotal: s.optionalNullable(s.float64()),
      profitNet: s.optionalNullable(s.float64()),
      _keysMap: {
        entityId: "entity_id",
        isActive: "is_active",
        revenueTotal: "revenue_total",
        profitNet: "profit_net",
      },
    },
    { additionalProperties: s.json() },
  );
