import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { siteStatsSchema, type SiteStats } from "./site-stats.js";

export type SiteSummary = {
  /** The numeric id you pass as `site_id` to /query. */
  siteId: number;
  /**
   * The site's domain. For the configured public demo site this is masked to `example.com` — see
   * "The demo site is masked" in docs/public-api-v1.md; breakdown values carrying the host are
   * masked the same way.
   */
  name: string;
  /**
   * The site's public token, used by widget script URLs and the shared dashboard link. Integrations
   * need it and previously had to parse it out of a widget snippet URL — which only worked for
   * hobby sites, since a paid site's tracker URL is keyed by the numeric id.
   */
  hash: string;
  /** The site's reporting timezone. */
  timezone: string;
  /**
   * True for a site on the free plan. It decides how the site counts at all: a hobby site is
   * tracked by the bundled `/t/` build (widget plus counter) carrying a `data-id` attribute, and an
   * event reaching us from any other build is refused. Install `GET /sites/{id}/snippet` verbatim
   * and this is handled for you; branch on it only if you build the tag yourself.
   */
  hobby: boolean;
  /** Stored value only (not computed on the fly); null if not yet computed. */
  statsStartDate?: string | null;
  createdAt?: Date;
  stats?: SiteStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const siteSummarySchema: Schema<SiteSummary> = s.object<SiteSummary>(
  {
    siteId: s.int(),
    name: s.string(),
    hash: s.string(),
    timezone: s.string(),
    hobby: s.boolean(),
    statsStartDate: s.optionalNullable(s.dateOnly()),
    createdAt: s.optional(s.dateTime()),
    stats: s.optional(s.lazy(() => siteStatsSchema)),
    _keysMap: {
      siteId: "site_id",
      statsStartDate: "stats_start_date",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
