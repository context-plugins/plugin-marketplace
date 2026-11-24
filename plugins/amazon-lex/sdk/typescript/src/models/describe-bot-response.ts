import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botMemberSchema, type BotMember } from "./bot-member.js";
import { botStatus6Schema, type BotStatus6 } from "./bot-status6.js";
import { botType3Schema, type BotType3 } from "./bot-type3.js";
import { dataPrivacySchema, type DataPrivacy } from "./data-privacy.js";
import { errorLogSettingsSchema, type ErrorLogSettings } from "./error-log-settings.js";

export type DescribeBotResponse = {
  /** The unique identifier of the bot. */
  botId?: string;
  /** The name of the bot. */
  botName?: string;
  /** The description of the bot. */
  description?: string;
  /** The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot. */
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  /** The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. */
  idleSessionTtlInSeconds?: number;
  /**
   * The current status of the bot. When the status is Available the bot is ready to be used in
   * conversations with users.
   */
  botStatus?: BotStatus6;
  /** A timestamp of the date and time that the bot was created. */
  creationDateTime?: Date;
  /** A timestamp of the date and time that the bot was last updated. */
  lastUpdatedDateTime?: Date;
  /** The type of the bot that was described. */
  botType?: BotType3;
  /** The list of bots in the network that was described. */
  botMembers?: BotMember[];
  /** If the botStatus is Failed, this contains a list of reasons that the bot couldn't be built. */
  failureReasons?: string[];
  errorLogSettings?: ErrorLogSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotResponseSchema: Schema<DescribeBotResponse> = s.object<DescribeBotResponse>(
  {
    botId: s.optional(s.string()),
    botName: s.optional(s.string()),
    description: s.optional(s.string()),
    roleArn: s.optional(s.string()),
    dataPrivacy: s.optional(s.lazy(() => dataPrivacySchema)),
    idleSessionTtlInSeconds: s.optional(s.int()),
    botStatus: s.optional(s.lazy(() => botStatus6Schema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
    botType: s.optional(s.lazy(() => botType3Schema)),
    botMembers: s.optional(s.array(s.lazy(() => botMemberSchema))),
    failureReasons: s.optional(s.array(s.string())),
    errorLogSettings: s.optional(s.lazy(() => errorLogSettingsSchema)),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
