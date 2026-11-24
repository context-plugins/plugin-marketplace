import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NoteIncludableExpensiveField = {
  /** @default false */
  eventAttendees?: boolean;
  /** @default false */
  organizerEmail?: boolean;
  /** @default false */
  contentMarkdown?: boolean;
  /** @default false */
  contentFellowMarkdown?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const noteIncludableExpensiveFieldSchema: Schema<NoteIncludableExpensiveField> =
  s.object<NoteIncludableExpensiveField>(
    {
      eventAttendees: s.defaulted(s.boolean(), false),
      organizerEmail: s.defaulted(s.boolean(), false),
      contentMarkdown: s.defaulted(s.boolean(), false),
      contentFellowMarkdown: s.defaulted(s.boolean(), false),
      _keysMap: {
        eventAttendees: "event_attendees",
        organizerEmail: "organizer_email",
        contentMarkdown: "content_markdown",
        contentFellowMarkdown: "content_fellow_markdown",
      },
    },
    { additionalProperties: s.json() },
  );
