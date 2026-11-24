import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the media encoding you specified in your Call Analytics request. */
export const MediaEncoding1 = {
  Pcm: "pcm",
  OggOpus: "ogg-opus",
  Flac: "flac",
  G711Alaw: "g711-alaw",
  G711Ulaw: "g711-ulaw",
  G729: "g729",
} as const;
export type MediaEncoding1 = (typeof MediaEncoding1)[keyof typeof MediaEncoding1] | (string & {});

export const mediaEncoding1Schema: EnumSchema<MediaEncoding1> = s.enumOf<MediaEncoding1>(MediaEncoding1);
