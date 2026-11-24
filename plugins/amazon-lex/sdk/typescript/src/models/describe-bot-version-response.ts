import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botMemberSchema, type BotMember } from "./bot-member.js";
import { botStatus7Schema, type BotStatus7 } from "./bot-status7.js";
import { botType4Schema, type BotType4 } from "./bot-type4.js";
import { dataPrivacySchema, type DataPrivacy } from "./data-privacy.js";
import { parentBotNetworkSchema, type ParentBotNetwork } from "./parent-bot-network.js";

export type DescribeBotVersionResponse = {
  /** The identifier of the bot that contains the version. */
  botId?: string;
  /** The name of the bot that contains the version. */
  botName?: string;
  /** The version of the bot that was described. */
  botVersion?: string;
  /** The description specified for the bot. */
  description?: string;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot version.
   */
  roleArn?: string;
  dataPrivacy?: DataPrivacy;
  /**
   * The number of seconds that a session with the bot remains active before it is discarded by
   * Amazon Lex.
   */
  idleSessionTtlInSeconds?: number;
  /**
   * The current status of the bot. When the status is Available, the bot version is ready for use.
   */
  botStatus?: BotStatus7;
  /**
   * If the botStatus is Failed, this contains a list of reasons that the version couldn't be built.
   */
  failureReasons?: string[];
  /** A timestamp of the date and time that the bot version was created. */
  creationDateTime?: Date;
  /** A list of the networks to which the bot version you described belongs. */
  parentBotNetworks?: ParentBotNetwork[];
  /** The type of the bot in the version that was described. */
  botType?: BotType4;
  /** The members of bot network in the version that was described. */
  botMembers?: BotMember[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotVersionResponseSchema: Schema<DescribeBotVersionResponse> =
  s.object<DescribeBotVersionResponse>(
    {
      botId: s.optional(s.string()),
      botName: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      description: s.optional(s.string()),
      roleArn: s.optional(s.string()),
      dataPrivacy: s.optional(s.lazy(() => dataPrivacySchema)),
      idleSessionTtlInSeconds: s.optional(s.int()),
      botStatus: s.optional(s.lazy(() => botStatus7Schema)),
      failureReasons: s.optional(s.array(s.string())),
      creationDateTime: s.optional(s.dateTime()),
      parentBotNetworks: s.optional(s.array(s.lazy(() => parentBotNetworkSchema))),
      botType: s.optional(s.lazy(() => botType4Schema)),
      botMembers: s.optional(s.array(s.lazy(() => botMemberSchema))),
      _keysMap: {
        idleSessionTtlInSeconds: "idleSessionTTLInSeconds",
      },
    },
    { additionalProperties: s.json() },
  );
