import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HeartbeatEvent = {
  /**
   * A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form
   * RESPONSE-N, where N is a number starting with one and incremented for each event sent by Amazon
   * Lex V2 in the current session.
   */
  eventId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const heartbeatEventSchema: Schema<HeartbeatEvent> = s.object<HeartbeatEvent>(
  {
    eventId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
