import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BotLocaleHistoryEvent = {
  /** A description of the event that occurred. */
  event: string;
  /** A timestamp of the date and time that the event occurred. */
  eventDate: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botLocaleHistoryEventSchema: Schema<BotLocaleHistoryEvent> = s.object<BotLocaleHistoryEvent>(
  {
    event: s.string(),
    eventDate: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
