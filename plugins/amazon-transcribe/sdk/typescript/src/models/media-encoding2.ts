import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Media Encoding you specified in your request. Same as provided in the
 * StartMedicalScribeStreamRequest
 */
export const MediaEncoding2 = {
  Pcm: "pcm",
  OggOpus: "ogg-opus",
  Flac: "flac",
} as const;
export type MediaEncoding2 = (typeof MediaEncoding2)[keyof typeof MediaEncoding2] | (string & {});

export const mediaEncoding2Schema: EnumSchema<MediaEncoding2> = s.enumOf<MediaEncoding2>(MediaEncoding2);
