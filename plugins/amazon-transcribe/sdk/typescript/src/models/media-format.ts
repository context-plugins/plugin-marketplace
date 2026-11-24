import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format of the input media file. */
export const MediaFormat = {
  Mp3: "mp3",
  Mp4: "mp4",
  Wav: "wav",
  Flac: "flac",
  Ogg: "ogg",
  Amr: "amr",
  Webm: "webm",
  M4A: "m4a",
} as const;
export type MediaFormat = (typeof MediaFormat)[keyof typeof MediaFormat] | (string & {});

export const mediaFormatSchema: EnumSchema<MediaFormat> = s.enumOf<MediaFormat>(MediaFormat);
