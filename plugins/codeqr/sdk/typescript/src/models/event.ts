import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of event to retrieve analytics for. Defaults to 'analytics'. */
export const Event = {
  Clicks: "clicks",
  Leads: "leads",
  Sales: "sales",
  Scans: "scans",
  Views: "views",
  Composite: "composite",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
