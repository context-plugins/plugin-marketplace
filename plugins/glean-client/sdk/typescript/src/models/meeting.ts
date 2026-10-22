import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { calendarAttendeesSchema, type CalendarAttendees } from "./calendar-attendees.js";

export type Meeting = {
  id?: string;
  title?: string;
  description?: string;
  url?: string;
  startTime?: Date;
  endTime?: Date;
  attendees?: CalendarAttendees;
  /** Whether the meeting has been cancelled */
  isCancelled?: boolean;
  /** The location/venue of the meeting */
  location?: string;
  /** The current user's response status (accepted, declined, tentativelyAccepted, none) */
  responseStatus?: string;
  /** The meeting join link (Teams, Zoom, etc.) */
  conferenceUri?: string;
  /** The conference provider (e.g., "Microsoft Teams", "Zoom") */
  conferenceProvider?: string;
};

export const meetingSchema: Schema<Meeting> = s.object<Meeting>({
  id: s.optional(s.string()),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
  url: s.optional(s.string()),
  startTime: s.optional(s.dateTime()),
  endTime: s.optional(s.dateTime()),
  attendees: s.optional(s.lazy(() => calendarAttendeesSchema)),
  isCancelled: s.optional(s.boolean()),
  location: s.optional(s.string()),
  responseStatus: s.optional(s.string()),
  conferenceUri: s.optional(s.string()),
  conferenceProvider: s.optional(s.string()),
});
