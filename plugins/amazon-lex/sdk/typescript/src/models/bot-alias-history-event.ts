import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BotAliasHistoryEvent = {
  /** The version of the bot that was used in the event. */
  botVersion?: string;
  /** The date and time that the event started. */
  startDate?: Date;
  /** The date and time that the event ended. */
  endDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botAliasHistoryEventSchema: Schema<BotAliasHistoryEvent> = s.object<BotAliasHistoryEvent>(
  {
    botVersion: s.optional(s.string()),
    startDate: s.optional(s.dateTime()),
    endDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
