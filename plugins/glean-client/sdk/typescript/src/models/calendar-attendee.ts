import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";
import { responseStatusSchema, type ResponseStatus } from "./response-status.js";

export type CalendarAttendee = {
  /** Whether or not this attendee is an organizer. */
  isOrganizer?: boolean;
  /**
   * Whether or not this attendee is in a group. Needed temporarily at least to support both flat
   * attendees and tree for compatibility.
   */
  isInGroup?: boolean;
  person: Person;
  /** If this attendee is a group, represents the list of individual attendees in the group. */
  groupAttendees?: CalendarAttendee[];
  responseStatus?: ResponseStatus;
};

export const calendarAttendeeSchema: Schema<CalendarAttendee> = s.object<CalendarAttendee>({
  isOrganizer: s.optional(s.boolean()),
  isInGroup: s.optional(s.boolean()),
  person: personSchema,
  groupAttendees: s.optional(s.array(s.lazy(() => calendarAttendeeSchema))),
  responseStatus: s.optional(s.lazy(() => responseStatusSchema)),
});
