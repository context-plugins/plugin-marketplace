import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventReasonSchema, type EventReason } from "./event-reason.js";

export type PlaybackInterruptionEvent = {
  /** Indicates the type of user input that Amazon Lex V2 detected. */
  eventReason?: EventReason;
  /**
   * The identifier of the event that contained the audio, DTMF, or text that caused the
   * interruption.
   */
  causedByEventId?: string;
  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form
   * RESPONSE-N, where N is a number starting with one and incremented for each event sent by Amazon
   * Lex V2 in the current session.
   */
  eventId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playbackInterruptionEventSchema: Schema<PlaybackInterruptionEvent> =
  s.object<PlaybackInterruptionEvent>(
    {
      eventReason: s.optional(s.lazy(() => eventReasonSchema)),
      causedByEventId: s.optional(s.string()),
      eventId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
