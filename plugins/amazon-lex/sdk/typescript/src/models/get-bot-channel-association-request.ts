import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetBotChannelAssociationRequest = {
  /** The name of the association between the bot and the channel. The name is case sensitive. */
  name: string;
  /** The name of the Amazon Lex bot. */
  botName: string;
  /**
   * An alias pointing to the specific version of the Amazon Lex bot to which this association is
   * being made.
   */
  botAlias: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotChannelAssociationRequestSchema: Schema<GetBotChannelAssociationRequest> =
  s.object<GetBotChannelAssociationRequest>(
    {
      name: s.string(),
      botName: s.string(),
      botAlias: s.string(),
    },
    { additionalProperties: s.json() },
  );
