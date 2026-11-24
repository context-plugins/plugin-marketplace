import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeMediaEncoding = {
  Pcm: "pcm",
  OggOpus: "ogg-opus",
  Flac: "flac",
} as const;
export type XAmznTranscribeMediaEncoding =
  | (typeof XAmznTranscribeMediaEncoding)[keyof typeof XAmznTranscribeMediaEncoding]
  | (string & {});

export const xAmznTranscribeMediaEncodingSchema: EnumSchema<XAmznTranscribeMediaEncoding> =
  s.enumOf<XAmznTranscribeMediaEncoding>(XAmznTranscribeMediaEncoding);
