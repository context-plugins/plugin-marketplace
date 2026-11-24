import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Media Encoding of the HealthScribe streaming session. */
export const MediaEncoding = {
  Pcm: "pcm",
  OggOpus: "ogg-opus",
  Flac: "flac",
} as const;
export type MediaEncoding = (typeof MediaEncoding)[keyof typeof MediaEncoding] | (string & {});

export const mediaEncodingSchema: EnumSchema<MediaEncoding> = s.enumOf<MediaEncoding>(MediaEncoding);
