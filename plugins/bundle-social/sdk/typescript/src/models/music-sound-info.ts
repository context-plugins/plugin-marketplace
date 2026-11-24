import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information about the Instagram audio asset used for Reels publishing. */
export type MusicSoundInfo = {
  /** Use audio_id from Instagram Audio API search endpoint. */
  musicSoundId: string;
  /** Audio volume (0-100). */
  musicSoundVolume?: number | null;
  /** Background volume of the original video sound (0-100). */
  videoOriginalSoundVolume?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const musicSoundInfoProperties: s.Shape<MusicSoundInfo> = {
  musicSoundId: s.string(),
  musicSoundVolume: s.optionalNullable(s.int()),
  videoOriginalSoundVolume: s.optionalNullable(s.int()),
};

export const musicSoundInfoInternalSchema: Schema<MusicSoundInfo> = s.object<MusicSoundInfo>(
  musicSoundInfoProperties,
  { additionalProperties: s.json() },
);

export const musicSoundInfoSchema: Schema<MusicSoundInfo> = s.lazySchema(() =>
  s.object<MusicSoundInfo>(
    {
      ...musicSoundInfoProperties,
      musicSoundId: s.string().check(s.minLength(1)),
      musicSoundVolume: s.optionalNullable(s.int().check(s.gte(0), s.lte(100))),
      videoOriginalSoundVolume: s.optionalNullable(s.int().check(s.gte(0), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
