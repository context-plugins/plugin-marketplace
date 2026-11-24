import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeMediaEncoding1 = {
  Pcm: "pcm",
  OggOpus: "ogg-opus",
  Flac: "flac",
  G711Alaw: "g711-alaw",
  G711Ulaw: "g711-ulaw",
  G729: "g729",
} as const;
export type XAmznTranscribeMediaEncoding1 =
  | (typeof XAmznTranscribeMediaEncoding1)[keyof typeof XAmznTranscribeMediaEncoding1]
  | (string & {});

export const xAmznTranscribeMediaEncoding1Schema: EnumSchema<XAmznTranscribeMediaEncoding1> =
  s.enumOf<XAmznTranscribeMediaEncoding1>(XAmznTranscribeMediaEncoding1);
