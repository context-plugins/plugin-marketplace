import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botChannelAssociationSchema, type BotChannelAssociation } from "./bot-channel-association.js";

export type GetBotChannelAssociationsResponse = {
  /**
   * An array of objects, one for each association, that provides information about the Amazon Lex
   * bot and its association with the channel.
   */
  botChannelAssociations?: BotChannelAssociation[];
  /**
   * A pagination token that fetches the next page of associations. If the response to this call is
   * truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * associations, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotChannelAssociationsResponseSchema: Schema<GetBotChannelAssociationsResponse> =
  s.object<GetBotChannelAssociationsResponse>(
    {
      botChannelAssociations: s.optional(s.array(s.lazy(() => botChannelAssociationSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
