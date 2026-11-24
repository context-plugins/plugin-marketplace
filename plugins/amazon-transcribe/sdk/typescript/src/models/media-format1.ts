import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specify the format of your input media file. */
export const MediaFormat1 = {
  Mp3: "mp3",
  Mp4: "mp4",
  Wav: "wav",
  Flac: "flac",
  Ogg: "ogg",
  Amr: "amr",
  Webm: "webm",
  M4A: "m4a",
} as const;
export type MediaFormat1 = (typeof MediaFormat1)[keyof typeof MediaFormat1] | (string & {});

export const mediaFormat1Schema: EnumSchema<MediaFormat1> = s.enumOf<MediaFormat1>(MediaFormat1);
