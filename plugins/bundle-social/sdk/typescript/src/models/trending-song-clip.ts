import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrendingSongClip = {
  /** Track preview URL (valid for six hours). */
  previewUrl?: string | null;
  /** Track duration in seconds. */
  duration?: number | null;
  /** Track clip ID that can be used as music_sound_id in publish endpoint. */
  songClipId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const trendingSongClipProperties: s.Shape<TrendingSongClip> = {
  previewUrl: s.optionalNullable(s.string()),
  duration: s.optionalNullable(s.int()),
  songClipId: s.string(),
  _keysMap: {
    previewUrl: "preview_url",
    songClipId: "song_clip_id",
  },
};

export const trendingSongClipInternalSchema: Schema<TrendingSongClip> = s.object<TrendingSongClip>(
  trendingSongClipProperties,
  { additionalProperties: s.json() },
);

export const trendingSongClipSchema: Schema<TrendingSongClip> = s.lazySchema(() =>
  s.object<TrendingSongClip>(
    {
      ...trendingSongClipProperties,
      previewUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
