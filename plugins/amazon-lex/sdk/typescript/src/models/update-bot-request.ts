import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botMemberSchema, type BotMember } from "./bot-member.js";
import { botType5Schema, type BotType5 } from "./bot-type5.js";
import { dataPrivacySchema, type DataPrivacy } from "./data-privacy.js";
import { errorLogSettingsSchema, type ErrorLogSettings } from "./error-log-settings.js";

export type UpdateBotRequest = {
  /**
   * The unique identifier of the bot to update. This identifier is returned by the CreateBot
   * operation.
   */
  botId: string;
  /** The new name of the bot. The name must be unique in the account that creates the bot. */
  botName: string;
  /** A description of the bot. */
  description?: string;
  /** The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot. */
  roleArn: string;
  dataPrivacy: DataPrivacy;
  /**
   * The time, in seconds, that Amazon Lex should keep information about a user's conversation with
   * the bot. A user interaction remains active for the amount of time specified. If no conversation
   * occurs during this time, the session expires and Amazon Lex deletes any data provided before
   * the timeout. You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.
   */
  idleSessionTtlInSeconds: number;
  /** The type of the bot to be updated. */
  botType?: BotType5;
  /** The list of bot members in the network associated with the update action. */
  botMembers?: BotMember[];
  errorLogSettings?: ErrorLogSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateBotRequestSchema: Schema<UpdateBotRequest> = s.object<UpdateBotRequest>(
  {
    botId: s.string(),
    botName: s.string(),
    description: s.optional(s.string()),
    roleArn: s.string(),
    dataPrivacy: dataPrivacySchema,
    idleSessionTtlInSeconds: s.int(),
    botType: s.optional(s.lazy(() => botType5Schema)),
    botMembers: s.optional(s.array(s.lazy(() => botMemberSchema))),
    errorLogSettings: s.optional(s.lazy(() => errorLogSettingsSchema)),
    _keysMap: {
      idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
    },
  },
  { additionalProperties: s.json() },
);
