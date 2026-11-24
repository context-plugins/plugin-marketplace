import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteBotChannelAssociationRequest = {
  /** The name of the association. The name is case sensitive. */
  name: string;
  /** The name of the Amazon Lex bot. */
  botName: string;
  /**
   * An alias that points to the specific version of the Amazon Lex bot to which this association is
   * being made.
   */
  botAlias: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBotChannelAssociationRequestSchema: Schema<DeleteBotChannelAssociationRequest> =
  s.object<DeleteBotChannelAssociationRequest>(
    {
      name: s.string(),
      botName: s.string(),
      botAlias: s.string(),
    },
    { additionalProperties: s.json() },
  );
