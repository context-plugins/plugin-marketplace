import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AudioMetadata = {
  /** The audio codec used to encode or decode the audio stream. */
  codec?: string;
  /** The duration of the audio stream in milliseconds. */
  durationMillis?: number;
  /** The sample rate for the audio stream. */
  sampleRate?: number;
  /** The number of audio channels in the segment. */
  numberOfChannels?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioMetadataSchema: Schema<AudioMetadata> = s.object<AudioMetadata>(
  {
    codec: s.optional(s.string()),
    durationMillis: s.optional(s.int()),
    sampleRate: s.optional(s.int()),
    numberOfChannels: s.optional(s.int()),
    _keysMap: {
      codec: "Codec",
      durationMillis: "DurationMillis",
      sampleRate: "SampleRate",
      numberOfChannels: "NumberOfChannels",
    },
  },
  { additionalProperties: s.json() },
);
