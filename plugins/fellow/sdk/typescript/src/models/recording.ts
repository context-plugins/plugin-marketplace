import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recapSchema, type Recap } from "./recap.js";
import { transcriptSchema, type Transcript } from "./transcript.js";

export type Recording = {
  id?: string;
  title?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  startedAt?: Date;
  endedAt?: Date | null;
  eventCallUrl?: string | null;
  eventGuid?: string | null;
  noteId?: string | null;
  userHasCalendarEvent?: boolean | null;
  transcript?: Transcript;
  aiNotes?: Recap[] | null;
  /** Pre-signed URL for the recording media file. Requires privileged API key. */
  mediaUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingSchema: Schema<Recording> = s.object<Recording>(
  {
    id: s.optional(s.string()),
    title: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    startedAt: s.optional(s.dateTime()),
    endedAt: s.optionalNullable(s.dateTime()),
    eventCallUrl: s.optionalNullable(s.string()),
    eventGuid: s.optionalNullable(s.string()),
    noteId: s.optionalNullable(s.string()),
    userHasCalendarEvent: s.optionalNullable(s.boolean()),
    transcript: s.optional(s.lazy(() => transcriptSchema)),
    aiNotes: s.optionalNullable(s.array(s.lazy(() => recapSchema))),
    mediaUrl: s.optionalNullable(s.string()),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
      startedAt: "started_at",
      endedAt: "ended_at",
      eventCallUrl: "event_call_url",
      eventGuid: "event_guid",
      noteId: "note_id",
      userHasCalendarEvent: "user_has_calendar_event",
      aiNotes: "ai_notes",
      mediaUrl: "media_url",
    },
  },
  { additionalProperties: s.json() },
);
