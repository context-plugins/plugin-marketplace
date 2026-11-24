import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonLexModelBuildingV2ChannelsApiSchema,
  type StatusAmazonLexModelBuildingV2ChannelsApi,
} from "./status-amazon-lex-model-building-v2-channels-api.js";
import {
  type1AmazonLexModelBuildingV2ChannelsApiSchema,
  type Type1AmazonLexModelBuildingV2ChannelsApi,
} from "./type1-amazon-lex-model-building-v2-channels-api.js";

export type GetBotChannelAssociationResponse = {
  /** The name of the association between the bot and the channel. */
  name?: string;
  /** A description of the association between the bot and the channel. */
  description?: string;
  /**
   * An alias pointing to the specific version of the Amazon Lex bot to which this association is
   * being made.
   */
  botAlias?: string;
  /** The name of the Amazon Lex bot. */
  botName?: string;
  /** The date that the association between the bot and the channel was created. */
  createdDate?: Date;
  /** The type of the messaging platform. */
  type?: Type1AmazonLexModelBuildingV2ChannelsApi;
  /**
   * Provides information that the messaging platform needs to communicate with the Amazon Lex bot.
   */
  botConfiguration?: Record<string, string>;
  /**
   * The status of the bot channel. CREATED - The channel has been created and is ready for use.
   * IN_PROGRESS - Channel creation is in progress. FAILED - There was an error creating the
   * channel. For information about the reason for the failure, see the failureReason field.
   */
  status?: StatusAmazonLexModelBuildingV2ChannelsApi;
  /**
   * If status is FAILED, Amazon Lex provides the reason that it failed to create the association.
   */
  failureReason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotChannelAssociationResponseSchema: Schema<GetBotChannelAssociationResponse> =
  s.object<GetBotChannelAssociationResponse>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      botAlias: s.optional(s.string()),
      botName: s.optional(s.string()),
      createdDate: s.optional(s.dateTime()),
      type: s.optional(s.lazy(() => type1AmazonLexModelBuildingV2ChannelsApiSchema)),
      botConfiguration: s.optional(s.record(s.string(), s.string())),
      status: s.optional(s.lazy(() => statusAmazonLexModelBuildingV2ChannelsApiSchema)),
      failureReason: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
