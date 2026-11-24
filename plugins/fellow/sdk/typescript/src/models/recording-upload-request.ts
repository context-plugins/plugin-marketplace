import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transcriptionLanguageSchema, type TranscriptionLanguage } from "./transcription-language.js";
import { mediaAuthInternalSchema, mediaAuthSchema, type MediaAuth } from "./unions/media-auth.js";

export type RecordingUploadRequest = {
  url: string;
  title: string;
  languageCode?: TranscriptionLanguage;
  mediaAuth?: MediaAuth | null;
  channelId?: string | null;
  eventGuid?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recordingUploadRequestProperties: s.Shape<RecordingUploadRequest> = {
  url: s.string(),
  title: s.string(),
  languageCode: s.optional(s.lazy(() => transcriptionLanguageSchema)),
  mediaAuth: s.optionalNullable(s.lazy(() => mediaAuthInternalSchema)),
  channelId: s.optionalNullable(s.string()),
  eventGuid: s.optionalNullable(s.string()),
  _keysMap: {
    languageCode: "language_code",
    mediaAuth: "media_auth",
    channelId: "channel_id",
    eventGuid: "event_guid",
  },
};

export const recordingUploadRequestInternalSchema: Schema<RecordingUploadRequest> =
  s.object<RecordingUploadRequest>(recordingUploadRequestProperties, { additionalProperties: s.json() });

export const recordingUploadRequestSchema: Schema<RecordingUploadRequest> = s.lazySchema(() =>
  s.object<RecordingUploadRequest>(
    {
      ...recordingUploadRequestProperties,
      url: s.string().check(s.minLength(1), s.url()),
      title: s.string().check(s.maxLength(255)),
      mediaAuth: s.optionalNullable(s.lazy(() => mediaAuthSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
