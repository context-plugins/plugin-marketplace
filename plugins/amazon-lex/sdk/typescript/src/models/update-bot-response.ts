import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botMemberSchema, type BotMember } from "./bot-member.js";
import { botStatus2Schema, type BotStatus2 } from "./bot-status2.js";
import { botType6Schema, type BotType6 } from "./bot-type6.js";
import { dataPrivacySchema, type DataPrivacy } from "./data-privacy.js";
import { errorLogSettingsSchema, type ErrorLogSettings } from "./error-log-settings.js";

export type UpdateBotResponse = {
  /** The unique identifier of the bot that was updated. */
  botId?: string;
  /** The name of the bot after the update. */
  botName?: string;
  /** The description of the bot after the update. */
  description?: string;
  /** The Amazon Resource Name (ARN) of the IAM role used by the bot after the update. */
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  /** The session timeout, in seconds, for the bot after the update. */
  idleSessionTtlInSeconds?: number;
  /**
   * Shows the current status of the bot. The bot is first in the Creating status. Once the bot is
   * read for use, it changes to the Available status. After the bot is created, you can use the
   * DRAFT version of the bot.
   */
  botStatus?: BotStatus2;
  /** A timestamp of the date and time that the bot was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the bot was last updated. */
  lastUpdatedDateTime?: Date;
  /** The type of the bot that was updated. */
  botType?: BotType6;
  /** The list of bot members in the network that was updated. */
  botMembers?: BotMember[];
  errorLogSettings?: ErrorLogSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBotResponseSchema: Schema<UpdateBotResponse> = s.object<UpdateBotResponse>(
  {
    botId: s.optional(s.string()),
    botName: s.optional(s.string()),
    description: s.optional(s.string()),
    roleArn: s.optional(s.string()),
    dataPrivacy: s.optional(s.lazy(() => dataPrivacySchema)),
    idleSessionTtlInSeconds: s.optional(s.int()),
    botStatus: s.optional(s.lazy(() => botStatus2Schema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
    botType: s.optional(s.lazy(() => botType6Schema)),
    botMembers: s.optional(s.array(s.lazy(() => botMemberSchema))),
    errorLogSettings: s.optional(s.lazy(() => errorLogSettingsSchema)),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
