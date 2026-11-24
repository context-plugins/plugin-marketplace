import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FullDurationSongClip = {
  /** Track preview URL (valid for six hours). */
  previewUrl?: string | null;
  /** Track duration in seconds. */
  duration?: number | null;
  /** Track clip ID that can be used as music_sound_id in publish endpoint. */
  songClipId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fullDurationSongClipProperties: s.Shape<FullDurationSongClip> = {
  previewUrl: s.optionalNullable(s.string()),
  duration: s.optionalNullable(s.int()),
  songClipId: s.string(),
  _keysMap: {
    previewUrl: "preview_url",
    songClipId: "song_clip_id",
  },
};

export const fullDurationSongClipInternalSchema: Schema<FullDurationSongClip> =
  s.object<FullDurationSongClip>(fullDurationSongClipProperties, { additionalProperties: s.json() });

export const fullDurationSongClipSchema: Schema<FullDurationSongClip> = s.lazySchema(() =>
  s.object<FullDurationSongClip>(
    {
      ...fullDurationSongClipProperties,
      previewUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
