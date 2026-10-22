import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { calendarAttendeesSchema, type CalendarAttendees } from "./calendar-attendees.js";
import {
  calendarRoomBookingStatusSchema,
  type CalendarRoomBookingStatus,
} from "./calendar-room-booking-status.js";
import { conferenceDataSchema, type ConferenceData } from "./conference-data.js";
import { eventClassificationSchema, type EventClassification } from "./event-classification.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import { generatedAttachmentSchema, type GeneratedAttachment } from "./generated-attachment.js";
import { timeIntervalSchema, type TimeInterval } from "./time-interval.js";

export type CalendarEvent = {
  time?: TimeInterval;
  /** The nature of the event, for example "out of office". */
  eventType?: EventType;
  /** The calendar event id */
  id: string;
  /** A permalink for this calendar event */
  url: string;
  attendees?: CalendarAttendees;
  /** Whether the requesting user is the organizer of this event. */
  isOrganizer?: boolean | null;
  /** The current booking status of the room resource associated with an event. */
  roomBookingStatus?: CalendarRoomBookingStatus;
  /** The display name of the room resource associated with this event. */
  roomName?: string;
  /** The location that this event is taking place at. */
  location?: string;
  conferenceData?: ConferenceData;
  /** The HTML description of the event. */
  description?: string;
  /** The app or other repository type from which the event was extracted */
  datasource?: string;
  /** The event has a transcript associated with it enabling features like summarization */
  hasTranscript?: boolean;
  /** A link to the transcript of the event */
  transcriptUrl?: string;
  classifications?: EventClassification[];
  generatedAttachments?: GeneratedAttachment[];
};

export const calendarEventSchema: Schema<CalendarEvent> = s.object<CalendarEvent>({
  time: s.optional(s.lazy(() => timeIntervalSchema)),
  eventType: s.optional(s.lazy(() => eventTypeSchema)),
  id: s.string(),
  url: s.string(),
  attendees: s.optional(s.lazy(() => calendarAttendeesSchema)),
  isOrganizer: s.optionalNullable(s.boolean()),
  roomBookingStatus: s.optional(s.lazy(() => calendarRoomBookingStatusSchema)),
  roomName: s.optional(s.string()),
  location: s.optional(s.string()),
  conferenceData: s.optional(s.lazy(() => conferenceDataSchema)),
  description: s.optional(s.string()),
  datasource: s.optional(s.string()),
  hasTranscript: s.optional(s.boolean()),
  transcriptUrl: s.optional(s.string()),
  classifications: s.optional(s.array(s.lazy(() => eventClassificationSchema))),
  generatedAttachments: s.optional(s.array(s.lazy(() => generatedAttachmentSchema))),
});
