import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tierPriceSchema, type TierPrice } from "./tier-price.js";
import { tierStatsSchema, type TierStats } from "./tier-stats.js";
import { tierStatusSchema, type TierStatus } from "./tier-status.js";

/** The subscription tier object. */
export type Tier = {
  /** The prefixed ID of the tier. */
  id: string;
  name: string;
  /** Returns whether or not the tier has any active prices. */
  status: TierStatus;
  /** @default "Super engaged readers" */
  description?: string;
  /**
   * Optional list of stats for a tier. Retrievable by including `expand: [stats]` in the tier
   * request body.
   */
  stats?: TierStats;
  /**
   * Optional list of prices for a tier. Retrievable by including `expand: [prices]` in the tier
   * request body.
   */
  prices?: TierPrice[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tierSchema: Schema<Tier> = s.object<Tier>(
  {
    id: s.string(),
    name: s.string(),
    status: tierStatusSchema,
    description: s.defaulted(s.string(), "Super engaged readers"),
    stats: s.optional(s.lazy(() => tierStatsSchema)),
    prices: s.optional(s.array(s.lazy(() => tierPriceSchema))),
  },
  { additionalProperties: s.json() },
);
