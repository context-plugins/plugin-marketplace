import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisconnectionEvent = {
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

export const disconnectionEventSchema: Schema<DisconnectionEvent> = s.object<DisconnectionEvent>(
  {
    eventId: s.optional(s.string()),
    clientTimestampMillis: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
