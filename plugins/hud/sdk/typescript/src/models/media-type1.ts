import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MediaType1 = {
  AudioWav: "audio/wav",
  AudioMpeg: "audio/mpeg",
  AudioMp4: "audio/mp4",
  AudioAac: "audio/aac",
  AudioOgg: "audio/ogg",
  AudioFlac: "audio/flac",
  AudioWebm: "audio/webm",
  AudioAiff: "audio/aiff",
} as const;
export type MediaType1 = (typeof MediaType1)[keyof typeof MediaType1] | (string & {});

export const mediaType1Schema: EnumSchema<MediaType1> = s.enumOf<MediaType1>(MediaType1);
