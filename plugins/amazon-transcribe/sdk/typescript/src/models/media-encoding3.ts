import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the media encoding you specified in your request. */
export const MediaEncoding3 = {
  Pcm: "pcm",
  OggOpus: "ogg-opus",
  Flac: "flac",
  G711Alaw: "g711-alaw",
  G711Ulaw: "g711-ulaw",
  G729: "g729",
} as const;
export type MediaEncoding3 = (typeof MediaEncoding3)[keyof typeof MediaEncoding3] | (string & {});

export const mediaEncoding3Schema: EnumSchema<MediaEncoding3> = s.enumOf<MediaEncoding3>(MediaEncoding3);
