import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicationStatsSchema, type PublicationStats } from "./publication-stats.js";

/** The full Publication object. Only present when `expand` includes `publication`. */
export type Publication2 = {
  /** A unique prefixed id of the publication */
  id: string;
  /** The name of the publication */
  name: string;
  /** The name of the organization */
  organizationName: string;
  /** A boolean field indicating whether the referral program is active for this publication. */
  referralProgramEnabled: boolean;
  /** The time that the publication was created. Measured in seconds since the Unix epoch */
  created: number;
  /**
   * Optional list of stats for a publication. Retrievable by including an `expand` array in the
   * publication request body. Add `"stats"` to the array to retrieve all, or add individual stats
   * (prefaced with `stat_`) to only retrieve specific ones.
   *
   * Examples: { "expand": ["stats"] }
   *
   * { "expand": ["stat_active_subscriptions", "stat_average_click_rate"] }
   */
  stats?: PublicationStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publication2Schema: Schema<Publication2> = s.object<Publication2>(
  {
    id: s.string(),
    name: s.string(),
    organizationName: s.string(),
    referralProgramEnabled: s.boolean(),
    created: s.float64(),
    stats: s.optional(s.lazy(() => publicationStatsSchema)),
    _keysMap: {
      organizationName: "organization_name",
      referralProgramEnabled: "referral_program_enabled",
    },
  },
  { additionalProperties: s.json() },
);
