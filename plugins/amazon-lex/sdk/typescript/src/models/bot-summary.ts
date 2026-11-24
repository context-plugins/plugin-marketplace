import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botStatusSchema, type BotStatus } from "./bot-status.js";
import { botTypeSchema, type BotType } from "./bot-type.js";

export type BotSummary = {
  /**
   * The unique identifier assigned to the bot. Use this ID to get detailed information about the
   * bot with the DescribeBot operation.
   */
  botId?: string;
  /** The name of the bot. */
  botName?: string;
  /** The description of the bot. */
  description?: string;
  /** The current status of the bot. When the status is Available the bot is ready for use. */
  botStatus?: BotStatus;
  /** The latest numerical version in use for the bot. */
  latestBotVersion?: string;
  /** The date and time that the bot was last updated. */
  lastUpdatedDateTime?: Date;
  /** The type of the bot. */
  botType?: BotType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botSummarySchema: Schema<BotSummary> = s.object<BotSummary>(
  {
    botId: s.optional(s.string()),
    botName: s.optional(s.string()),
    description: s.optional(s.string()),
    botStatus: s.optional(s.lazy(() => botStatusSchema)),
    latestBotVersion: s.optional(s.string()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
    botType: s.optional(s.lazy(() => botTypeSchema)),
  },
  { additionalProperties: s.json() },
);
