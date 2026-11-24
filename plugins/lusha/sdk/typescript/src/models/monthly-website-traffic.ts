import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Revealed via reveal: ["monthlyWebsiteTraffic"] in Enrich Companies. Charged 1 credit when
 * non-null.
 */
export type MonthlyWebsiteTraffic = {
  visits?: number;
  momChangePercent?: number;
  month?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monthlyWebsiteTrafficSchema: Schema<MonthlyWebsiteTraffic> = s.object<MonthlyWebsiteTraffic>(
  {
    visits: s.optional(s.float64()),
    momChangePercent: s.optional(s.float64()),
    month: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
