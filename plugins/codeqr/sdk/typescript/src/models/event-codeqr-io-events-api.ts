import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of event to retrieve analytics for. Defaults to 'clicks'. */
export const EventCodeqrIoEventsApi = {
  Clicks: "clicks",
  Leads: "leads",
  Sales: "sales",
  Scans: "scans",
  Views: "views",
} as const;
export type EventCodeqrIoEventsApi =
  | (typeof EventCodeqrIoEventsApi)[keyof typeof EventCodeqrIoEventsApi]
  | (string & {});

export const eventCodeqrIoEventsApiSchema: EnumSchema<EventCodeqrIoEventsApi> =
  s.enumOf<EventCodeqrIoEventsApi>(EventCodeqrIoEventsApi);
