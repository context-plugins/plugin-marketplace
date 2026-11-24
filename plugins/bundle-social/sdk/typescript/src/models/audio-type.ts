import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AudioType = {
  OriginalSound: "original_sound",
  Music: "music",
} as const;
export type AudioType = (typeof AudioType)[keyof typeof AudioType] | (string & {});

export const audioTypeSchema: EnumSchema<AudioType> = s.enumOf<AudioType>(AudioType);
