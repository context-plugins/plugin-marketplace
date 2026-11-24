import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { calendarEventInternalSchema, calendarEventSchema, type CalendarEvent } from "./calendar-event.js";

export type CalendarEvents = {
  events?: CalendarEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const calendarEventsProperties: s.Shape<CalendarEvents> = {
  events: s.optional(s.array(s.lazy(() => calendarEventInternalSchema))),
};

export const calendarEventsInternalSchema: Schema<CalendarEvents> = s.object<CalendarEvents>(
  calendarEventsProperties,
  { additionalProperties: s.json() },
);

export const calendarEventsSchema: Schema<CalendarEvents> = s.lazySchema(() =>
  s.object<CalendarEvents>(
    {
      ...calendarEventsProperties,
      events: s.optional(s.array(s.lazy(() => calendarEventSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
