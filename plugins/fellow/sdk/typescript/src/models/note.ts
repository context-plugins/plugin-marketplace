import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attendeeSchema, type Attendee } from "./attendee.js";

export type Note = {
  id?: string;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  title?: string | null;
  eventGuid?: string | null;
  eventStart?: Date | null;
  eventEnd?: Date | null;
  eventIsAllDay?: boolean;
  recordingIds?: string[];
  eventAttendees?: Attendee[] | null;
  /**
   * Email of the meeting organizer, as read from the calendar event linked to this note. Null when
   * the note has no meeting, when the matching calendar event cannot be found, or when the event
   * has no known organizer. The organizer is read from one attendee's copy of the event, chosen
   * automatically, so it may change between requests and may differ from the organizer shown
   * elsewhere for the same meeting.
   */
  organizerEmail?: string | null;
  /**
   * A simplified, read-only markdown rendering of the note content, for display and export. Lossy,
   * and not valid input for the agenda write endpoint; to edit content, use content_fellow_markdown
   * instead.
   */
  contentMarkdown?: string | null;
  /**
   * The note content as Fellow Markdown, the editable round-trip format: what you read here is what
   * you can write back via POST /note/{note_id}/agenda. Null when the note exceeds the
   * serialization limits.
   */
  contentFellowMarkdown?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const noteSchema: Schema<Note> = s.object<Note>(
  {
    id: s.optional(s.string()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    title: s.optionalNullable(s.string()),
    eventGuid: s.optionalNullable(s.string()),
    eventStart: s.optionalNullable(s.dateTime()),
    eventEnd: s.optionalNullable(s.dateTime()),
    eventIsAllDay: s.optional(s.boolean()),
    recordingIds: s.optional(s.array(s.string())),
    eventAttendees: s.optionalNullable(s.array(s.lazy(() => attendeeSchema))),
    organizerEmail: s.optionalNullable(s.string()),
    contentMarkdown: s.optionalNullable(s.string()),
    contentFellowMarkdown: s.optionalNullable(s.string()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      eventGuid: "event_guid",
      eventStart: "event_start",
      eventEnd: "event_end",
      eventIsAllDay: "event_is_all_day",
      recordingIds: "recording_ids",
      eventAttendees: "event_attendees",
      organizerEmail: "organizer_email",
      contentMarkdown: "content_markdown",
      contentFellowMarkdown: "content_fellow_markdown",
    },
  },
  { additionalProperties: s.json() },
);
