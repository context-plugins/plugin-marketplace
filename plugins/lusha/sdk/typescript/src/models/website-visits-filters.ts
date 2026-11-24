import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scoreBand1Schema, type ScoreBand1 } from "./score-band1.js";
import { visitorCountriesSchema, type VisitorCountries } from "./visitor-countries.js";
import {
  websiteVisitsFloatRangeInternalSchema,
  websiteVisitsFloatRangeSchema,
  type WebsiteVisitsFloatRange,
} from "./website-visits-float-range.js";
import {
  websiteVisitsIntRangeInternalSchema,
  websiteVisitsIntRangeSchema,
  type WebsiteVisitsIntRange,
} from "./website-visits-int-range.js";

export type WebsiteVisitsFilters = {
  /** Restrict to specific score bands. */
  scoreBands?: ScoreBand1[];
  /** ISO 3166-1 alpha-2 country code filters. */
  visitorCountries?: VisitorCountries;
  /** Score range (1–100). */
  score?: WebsiteVisitsIntRange;
  /** Integer range filter (non-negative) */
  totalSessions?: WebsiteVisitsIntRange;
  /** Float range filter (non-negative) */
  avgSessionMinutes?: WebsiteVisitsFloatRange;
  /** Integer range filter (non-negative) */
  uniqueVisitors?: WebsiteVisitsIntRange;
  /** Integer range filter (non-negative) */
  daysVisited?: WebsiteVisitsIntRange;
  /** Integer range filter (non-negative) */
  highIntentPageviews?: WebsiteVisitsIntRange;
  /** Integer range filter (non-negative) */
  daysSinceLastVisit?: WebsiteVisitsIntRange;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const websiteVisitsFiltersProperties: s.Shape<WebsiteVisitsFilters> = {
  scoreBands: s.optional(s.array(s.lazy(() => scoreBand1Schema))),
  visitorCountries: s.optional(s.lazy(() => visitorCountriesSchema)),
  score: s.optional(s.lazy(() => websiteVisitsIntRangeInternalSchema)),
  totalSessions: s.optional(s.lazy(() => websiteVisitsIntRangeInternalSchema)),
  avgSessionMinutes: s.optional(s.lazy(() => websiteVisitsFloatRangeInternalSchema)),
  uniqueVisitors: s.optional(s.lazy(() => websiteVisitsIntRangeInternalSchema)),
  daysVisited: s.optional(s.lazy(() => websiteVisitsIntRangeInternalSchema)),
  highIntentPageviews: s.optional(s.lazy(() => websiteVisitsIntRangeInternalSchema)),
  daysSinceLastVisit: s.optional(s.lazy(() => websiteVisitsIntRangeInternalSchema)),
};

export const websiteVisitsFiltersInternalSchema: Schema<WebsiteVisitsFilters> =
  s.object<WebsiteVisitsFilters>(websiteVisitsFiltersProperties, { additionalProperties: s.json() });

export const websiteVisitsFiltersSchema: Schema<WebsiteVisitsFilters> = s.lazySchema(() =>
  s.object<WebsiteVisitsFilters>(
    {
      ...websiteVisitsFiltersProperties,
      score: s.optional(s.lazy(() => websiteVisitsIntRangeSchema)),
      totalSessions: s.optional(s.lazy(() => websiteVisitsIntRangeSchema)),
      avgSessionMinutes: s.optional(s.lazy(() => websiteVisitsFloatRangeSchema)),
      uniqueVisitors: s.optional(s.lazy(() => websiteVisitsIntRangeSchema)),
      daysVisited: s.optional(s.lazy(() => websiteVisitsIntRangeSchema)),
      highIntentPageviews: s.optional(s.lazy(() => websiteVisitsIntRangeSchema)),
      daysSinceLastVisit: s.optional(s.lazy(() => websiteVisitsIntRangeSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
