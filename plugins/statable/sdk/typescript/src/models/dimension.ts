import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * At most one per query. A time dimension yields a series; a breakdown dimension yields top-N rows.
 * Not every metric is valid for every breakdown — a metric the builder does not compute returns
 * `metric_not_available`. In addition to the enum below, a dynamic `event:props:<key>` dimension
 * breaks a custom event down by one of its property values (metrics `visitors` + `events`); it
 * requires an `event` filter to name the event, else `event_filter_required`.
 */
export const Dimension = {
  Time: "time",
  TimeMinute: "time:minute",
  TimeHour: "time:hour",
  TimeDay: "time:day",
  TimeWeek: "time:week",
  TimeMonth: "time:month",
  VisitSource: "visit:source",
  VisitReferrer: "visit:referrer",
  VisitChannel: "visit:channel",
  VisitUtmSource: "visit:utm_source",
  VisitUtmMedium: "visit:utm_medium",
  VisitUtmCampaign: "visit:utm_campaign",
  VisitUtmContent: "visit:utm_content",
  VisitUtmTerm: "visit:utm_term",
  VisitCountry: "visit:country",
  VisitRegion: "visit:region",
  VisitCity: "visit:city",
  VisitBrowser: "visit:browser",
  VisitBrowserVersion: "visit:browser_version",
  VisitOs: "visit:os",
  VisitOsVersion: "visit:os_version",
  VisitDevice: "visit:device",
  VisitEntryPage: "visit:entry_page",
  VisitExitPage: "visit:exit_page",
  EventPage: "event:page",
  EventFolder: "event:folder",
  EventHostname: "event:hostname",
  EventName: "event:name",
  EventGoal: "event:goal",
  EventStatusCode: "event:status_code",
} as const;
export type Dimension = (typeof Dimension)[keyof typeof Dimension] | (string & {});

export const dimensionSchema: EnumSchema<Dimension> = s.enumOf<Dimension>(Dimension);
