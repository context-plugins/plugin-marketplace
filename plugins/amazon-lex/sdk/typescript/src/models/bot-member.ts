import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BotMember = {
  /** The unique ID of a bot that is a member of this network of bots. */
  botMemberId: string;
  /** The unique name of a bot that is a member of this network of bots. */
  botMemberName: string;
  /** The alias ID of a bot that is a member of this network of bots. */
  botMemberAliasId: string;
  /** The alias name of a bot that is a member of this network of bots. */
  botMemberAliasName: string;
  /** The version of a bot that is a member of this network of bots. */
  botMemberVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const botMemberSchema: Schema<BotMember> = s.object<BotMember>(
  {
    botMemberId: s.string(),
    botMemberName: s.string(),
    botMemberAliasId: s.string(),
    botMemberAliasName: s.string(),
    botMemberVersion: s.string(),
  },
  { additionalProperties: s.json() },
);
