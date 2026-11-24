import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Field name WITHOUT the visit:/event: prefix. Geo fields take codes, not names (country/region =
 * ISO/subdivision codes, city = numeric geoname_id — the values geo breakdowns return). The `event`
 * field filters by a custom event name (an `event:name` breakdown value) and restricts the whole
 * query to that event's sessions; it accepts ONLY operator `is` with a single non-standard value
 * (not `pageview` / `engagement`) — other forms return `invalid_filter`.
 */
export const Field = {
  Browser: "browser",
  BrowserVersion: "browser_version",
  Os: "os",
  OsVersion: "os_version",
  Device: "device",
  Country: "country",
  City: "city",
  Region: "region",
  Hostname: "hostname",
  UtmSource: "utm_source",
  UtmMedium: "utm_medium",
  UtmCampaign: "utm_campaign",
  UtmContent: "utm_content",
  UtmTerm: "utm_term",
  EntryPage: "entry_page",
  ExitPage: "exit_page",
  Source: "source",
  Channel: "channel",
  Referrer: "referrer",
  Page: "page",
  Code: "code",
  Event: "event",
} as const;
export type Field = (typeof Field)[keyof typeof Field] | (string & {});

export const fieldSchema: EnumSchema<Field> = s.enumOf<Field>(Field);
