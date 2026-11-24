import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AudioInputEvent = {
  /** An encoded stream of audio. */
  audioChunk?: string;
  /**
   * The encoding used for the audio chunk. You must use 8 KHz PCM 16-bit mono-channel little-endian
   * format. The value of the field should be: audio/lpcm; sample-rate=8000; sample-size-bits=16;
   * channel-count=1; is-big-endian=false
   */
  contentType: string;
  /**
   * A unique identifier that your application assigns to the event. You can use this to identify
   * events in logs.
   */
  eventId?: string;
  /**
   * A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
   */
  clientTimestampMillis?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioInputEventSchema: Schema<AudioInputEvent> = s.object<AudioInputEvent>(
  {
    audioChunk: s.optional(s.string()),
    contentType: s.string(),
    eventId: s.optional(s.string()),
    clientTimestampMillis: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
