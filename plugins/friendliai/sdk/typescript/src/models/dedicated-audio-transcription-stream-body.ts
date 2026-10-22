import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chunkingStrategy1Schema, type ChunkingStrategy1 } from "./unions/chunking-strategy1.js";
import { languageSchema, type Language } from "./unions/language.js";
import { temperature12Schema, type Temperature12 } from "./unions/temperature12.js";

export type DedicatedAudioTranscriptionStreamBody = {
  /**
   * ID of target endpoint. If you want to send request to specific adapter, use the format
   * "YOUR_ENDPOINT_ID:YOUR_ADAPTER_ROUTE". Otherwise, you can just use "YOUR_ENDPOINT_ID" alone.
   */
  model: string;
  /**
   * The audio file object (not file name) to transcribe, in one of these formats: mp3, wav, flac,
   * ogg, and many other standard audio formats.
   */
  file: Uint8Array;
  /**
   * Controls how the audio is cut into chunks. When set to `"auto"`, the server first normalizes
   * loudness and then uses voice activity detection (VAD) to choose boundaries. `server_vad` object
   * can be provided to tweak VAD detection parameters manually. If unset, the audio is transcribed
   * as a single block.
   */
  chunkingStrategy?: ChunkingStrategy1;
  /**
   * The language of the input audio. Supplying the input language in
   * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g. `en`) format will
   * improve accuracy and latency.
   */
  language?: Language;
  /**
   * Whether to stream the transcription result. When set to `true`, the transcription is sent as
   * [server-sent
   * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
   * once generated.
   *
   * @default true
   */
  stream?: boolean;
  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more
   * random, while lower values like 0.2 will make it more focused and deterministic.
   */
  temperature?: Temperature12;
};

export const dedicatedAudioTranscriptionStreamBodySchema: Schema<DedicatedAudioTranscriptionStreamBody> =
  s.object<DedicatedAudioTranscriptionStreamBody>({
    model: s.string(),
    file: s.bytes(),
    chunkingStrategy: s.optional(s.lazy(() => chunkingStrategy1Schema)),
    language: s.optional(s.lazy(() => languageSchema)),
    stream: s.defaulted(s.boolean(), true),
    temperature: s.optional(s.lazy(() => temperature12Schema)),
    _keysMap: {
      chunkingStrategy: "chunking_strategy",
    },
  });
