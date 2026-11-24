import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `visits` = sessions. `visit_duration` in seconds. `bounce_rate` is a 0–100 percentage.
 * `views_per_visit` = pageviews/visits (2 decimals). `engagement_time` = avg active-engagement
 * seconds (aggregate + time-series, distinct from visit_duration). `events` = raw event count
 * (breakdowns event:name/props/goal). `conversion_rate` = converters percent (event:goal).
 * `time_on_page`/`scroll_depth` = avg seconds / avg max scroll% 0-100 (event:page, event:folder).
 * `exit_rate` = exits percent of pageviews (visit:exit_page). The last five are breakdown-only: off
 * their dimension, and on an aggregate or a time series, they return `metric_not_available` naming
 * the shape and the dimensions that do compute them. `unknown_metric` means the name itself is not
 * a metric we compute.
 */
export const Metric = {
  Visitors: "visitors",
  Pageviews: "pageviews",
  Visits: "visits",
  VisitDuration: "visit_duration",
  BounceRate: "bounce_rate",
  ViewsPerVisit: "views_per_visit",
  EngagementTime: "engagement_time",
  Events: "events",
  ConversionRate: "conversion_rate",
  TimeOnPage: "time_on_page",
  ScrollDepth: "scroll_depth",
  ExitRate: "exit_rate",
} as const;
export type Metric = (typeof Metric)[keyof typeof Metric] | (string & {});

export const metricSchema: EnumSchema<Metric> = s.enumOf<Metric>(Metric);
