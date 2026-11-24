import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Encoding of audio data sent in all `RecognitionAudio` messages. This field is optional for `FLAC`
 * and `WAV` audio files and required for all other audio formats. For details, see AudioEncoding.
 */
export const Encoding = {
  EncodingUnspecified: "ENCODING_UNSPECIFIED",
  Linear16: "LINEAR16",
  Flac: "FLAC",
  Mulaw: "MULAW",
  Amr: "AMR",
  AmrWb: "AMR_WB",
  OggOpus: "OGG_OPUS",
  SpeexWithHeaderByte: "SPEEX_WITH_HEADER_BYTE",
  Mp3: "MP3",
  WebmOpus: "WEBM_OPUS",
  Alaw: "ALAW",
} as const;
export type Encoding = (typeof Encoding)[keyof typeof Encoding] | (string & {});

export const encodingSchema: EnumSchema<Encoding> = s.enumOf<Encoding>(Encoding);
