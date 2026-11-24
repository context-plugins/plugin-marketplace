import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information about the commercial sound (track) used for TikTok publishing. */
export type MusicSoundInfo1 = {
  /** Use song_clip_id from CML trending list (full_duration_song_clip or trending_song_clip). */
  musicSoundId: string;
  /** Commercial sound volume (0-100). */
  musicSoundVolume?: number | null;
  /** Starting point of the commercial sound in milliseconds. */
  musicSoundStart?: number | null;
  /** Ending point of the commercial sound in milliseconds. */
  musicSoundEnd?: number | null;
  /** Background volume of the original video sound (0-100). */
  videoOriginalSoundVolume?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const musicSoundInfo1Properties: s.Shape<MusicSoundInfo1> = {
  musicSoundId: s.string(),
  musicSoundVolume: s.optionalNullable(s.int()),
  musicSoundStart: s.optionalNullable(s.int()),
  musicSoundEnd: s.optionalNullable(s.int()),
  videoOriginalSoundVolume: s.optionalNullable(s.int()),
};

export const musicSoundInfo1InternalSchema: Schema<MusicSoundInfo1> = s.object<MusicSoundInfo1>(
  musicSoundInfo1Properties,
  { additionalProperties: s.json() },
);

export const musicSoundInfo1Schema: Schema<MusicSoundInfo1> = s.lazySchema(() =>
  s.object<MusicSoundInfo1>(
    {
      ...musicSoundInfo1Properties,
      musicSoundId: s.string().check(s.minLength(1)),
      musicSoundVolume: s.optionalNullable(s.int().check(s.gte(0), s.lte(100))),
      musicSoundStart: s.optionalNullable(s.int().check(s.gte(0))),
      musicSoundEnd: s.optionalNullable(s.int().check(s.gte(0))),
      videoOriginalSoundVolume: s.optionalNullable(s.int().check(s.gte(0), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
