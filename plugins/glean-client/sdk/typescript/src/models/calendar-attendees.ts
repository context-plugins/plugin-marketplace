import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { calendarAttendeeSchema, type CalendarAttendee } from "./calendar-attendee.js";

export type CalendarAttendees = {
  /** Full details of some of the attendees of this event */
  people?: CalendarAttendee[];
  /** Whether the total count of the people returned is at the retrieval limit. */
  isLimit?: boolean;
  /** Total number of attendees in this event. */
  total?: number;
  /** Total number of attendees who have accepted this event. */
  numAccepted?: number;
  /** Total number of attendees who have declined this event. */
  numDeclined?: number;
  /** Total number of attendees who have not responded to this event. */
  numNoResponse?: number;
  /**
   * Total number of attendees who have responded tentatively (i.e. responded maybe) to this event.
   */
  numTentative?: number;
};

export const calendarAttendeesSchema: Schema<CalendarAttendees> = s.object<CalendarAttendees>({
  people: s.optional(s.array(s.lazy(() => calendarAttendeeSchema))),
  isLimit: s.optional(s.boolean()),
  total: s.optional(s.int()),
  numAccepted: s.optional(s.int()),
  numDeclined: s.optional(s.int()),
  numNoResponse: s.optional(s.int()),
  numTentative: s.optional(s.int()),
});
