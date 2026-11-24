import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botMemberSchema, type BotMember } from "./bot-member.js";
import { botStatus2Schema, type BotStatus2 } from "./bot-status2.js";
import { botType2Schema, type BotType2 } from "./bot-type2.js";
import { dataPrivacySchema, type DataPrivacy } from "./data-privacy.js";
import { errorLogSettingsSchema, type ErrorLogSettings } from "./error-log-settings.js";

export type CreateBotResponse = {
  /**
   * A unique identifier for a particular bot. You use this to identify the bot when you call other
   * Amazon Lex API operations.
   */
  botId?: string;
  /** The name specified for the bot. */
  botName?: string;
  /** The description specified for the bot. */
  description?: string;
  /** The IAM role specified for the bot. */
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  /** The session idle time specified for the bot. */
  idleSessionTtlInSeconds?: number;
  /**
   * Shows the current status of the bot. The bot is first in the Creating status. Once the bot is
   * read for use, it changes to the Available status. After the bot is created, you can use the
   * DRAFT version of the bot.
   */
  botStatus?: BotStatus2;
  /** A timestamp indicating the date and time that the bot was created. */
  creationDateTime?: Date;
  /** A list of tags associated with the bot. */
  botTags?: Record<string, string>;
  /** A list of tags associated with the test alias for the bot. */
  testBotAliasTags?: Record<string, string>;
  /** The type of a bot that was created. */
  botType?: BotType2;
  /** The list of bots in a network that was created. */
  botMembers?: BotMember[];
  errorLogSettings?: ErrorLogSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createBotResponseSchema: Schema<CreateBotResponse> = s.object<CreateBotResponse>(
  {
    botId: s.optional(s.string()),
    botName: s.optional(s.string()),
    description: s.optional(s.string()),
    roleArn: s.optional(s.string()),
    dataPrivacy: s.optional(s.lazy(() => dataPrivacySchema)),
    idleSessionTtlInSeconds: s.optional(s.int()),
    botStatus: s.optional(s.lazy(() => botStatus2Schema)),
    creationDateTime: s.optional(s.dateTime()),
    botTags: s.optional(s.record(s.string(), s.string())),
    testBotAliasTags: s.optional(s.record(s.string(), s.string())),
    botType: s.optional(s.lazy(() => botType2Schema)),
    botMembers: s.optional(s.array(s.lazy(() => botMemberSchema))),
    errorLogSettings: s.optional(s.lazy(() => errorLogSettingsSchema)),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
