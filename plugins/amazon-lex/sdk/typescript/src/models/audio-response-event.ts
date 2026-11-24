import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AudioResponseEvent = {
  /** A chunk of the audio to play. */
  audioChunk?: string;
  /**
   * The encoding of the audio chunk. This is the same as the encoding configure in the contentType
   * field of the ConfigurationEvent.
   */
  contentType?: string;
  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form
   * RESPONSE-N, where N is a number starting with one and incremented for each event sent by Amazon
   * Lex V2 in the current session.
   */
  eventId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioResponseEventSchema: Schema<AudioResponseEvent> = s.object<AudioResponseEvent>(
  {
    audioChunk: s.optional(s.string()),
    contentType: s.optional(s.string()),
    eventId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
