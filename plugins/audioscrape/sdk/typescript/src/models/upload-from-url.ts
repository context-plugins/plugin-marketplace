import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * JSON body for URL-based upload. Use this when the audio is already hosted somewhere reachable
 * from the public internet (S3 presigned URL, CDN, your own server). Audioscrape downloads it and
 * stores a copy so transcription, indexing, and playback work even if your URL later becomes
 * unavailable.
 */
export type UploadFromUrl = {
  /**
   * Publicly reachable `https://` URL of the audio file. Must NOT resolve to a private / internal
   * IP range (SSRF guard).
   */
  audioUrl: string;
  /**
   * What the audio IS (e.g. `phone_call`). Drives the Details panel, speaker-label suggestions, and
   * processing hints. See GH#35.
   */
  contentType?: string | null;
  /**
   * GH#617: opt in to derived titles (cleaned filename placeholder + transcript-derived title from
   * the pipeline). Default OFF on the API: the title you send — or the file's own name — is treated
   * as your deliberate choice and never rewritten.
   */
  deriveTitle?: boolean | null;
  description?: string | null;
  /**
   * Free-form, type-shaped metadata bag (descriptive fields + processing hints like num_speakers).
   * Must be a JSON object. Stored on `items.metadata`.
   */
  metadata?: Record<string, unknown>;
  title?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const uploadFromUrlSchema: Schema<UploadFromUrl> = s.object<UploadFromUrl>(
  {
    audioUrl: s.string(),
    contentType: s.optionalNullable(s.string()),
    deriveTitle: s.optionalNullable(s.boolean()),
    description: s.optionalNullable(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    title: s.optionalNullable(s.string()),
    _keysMap: {
      audioUrl: "audio_url",
      contentType: "content_type",
      deriveTitle: "derive_title",
    },
  },
  { additionalProperties: s.json() },
);
