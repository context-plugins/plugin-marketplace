import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecordingFilters = {
  eventGuid?: string | null;
  createdAtStart?: string | null;
  createdAtEnd?: string | null;
  updatedAtStart?: string | null;
  updatedAtEnd?: string | null;
  channelId?: string | null;
  title?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordingFiltersSchema: Schema<RecordingFilters> = s.object<RecordingFilters>(
  {
    eventGuid: s.optionalNullable(s.string()),
    createdAtStart: s.optionalNullable(s.string()),
    createdAtEnd: s.optionalNullable(s.string()),
    updatedAtStart: s.optionalNullable(s.string()),
    updatedAtEnd: s.optionalNullable(s.string()),
    channelId: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    _keysMap: {
      eventGuid: "event_guid",
      createdAtStart: "created_at_start",
      createdAtEnd: "created_at_end",
      updatedAtStart: "updated_at_start",
      updatedAtEnd: "updated_at_end",
      channelId: "channel_id",
    },
  },
  { additionalProperties: s.json() },
);
