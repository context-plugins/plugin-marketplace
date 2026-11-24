import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botStatus1Schema, type BotStatus1 } from "./bot-status1.js";

export type BotVersionSummary = {
  /** The name of the bot associated with the version. */
  botName?: string;
  /**
   * The numeric version of the bot, or DRAFT to indicate that this is the version of the bot that
   * can be updated..
   */
  botVersion?: string;
  /** The description of the version. */
  description?: string;
  /**
   * The status of the bot. When the status is available, the version of the bot is ready for use.
   */
  botStatus?: BotStatus1;
  /** A timestamp of the date and time that the version was created. */
  creationDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botVersionSummarySchema: Schema<BotVersionSummary> = s.object<BotVersionSummary>(
  {
    botName: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    description: s.optional(s.string()),
    botStatus: s.optional(s.lazy(() => botStatus1Schema)),
    creationDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
