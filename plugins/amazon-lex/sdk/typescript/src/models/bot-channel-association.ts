import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonLexModelBuildingV2ChannelsApiSchema,
  type StatusAmazonLexModelBuildingV2ChannelsApi,
} from "./status-amazon-lex-model-building-v2-channels-api.js";
import {
  typeAmazonLexModelBuildingV2ChannelsApiSchema,
  type TypeAmazonLexModelBuildingV2ChannelsApi,
} from "./type-amazon-lex-model-building-v2-channels-api.js";

export type BotChannelAssociation = {
  /** The name of the association between the bot and the channel. */
  name?: string;
  /** A text description of the association you are creating. */
  description?: string;
  /**
   * An alias pointing to the specific version of the Amazon Lex bot to which this association is
   * being made.
   */
  botAlias?: string;
  /**
   * The name of the Amazon Lex bot to which this association is being made. Currently, Amazon Lex
   * supports associations with Facebook and Slack, and Twilio.
   */
  botName?: string;
  /** The date that the association between the Amazon Lex bot and the channel was created. */
  createdDate?: Date;
  /**
   * Specifies the type of association by indicating the type of channel being established between
   * the Amazon Lex bot and the external messaging platform.
   */
  type?: TypeAmazonLexModelBuildingV2ChannelsApi;
  /** Provides information necessary to communicate with the messaging platform. */
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

export const botChannelAssociationSchema: Schema<BotChannelAssociation> = s.object<BotChannelAssociation>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    botAlias: s.optional(s.string()),
    botName: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
    type: s.optional(s.lazy(() => typeAmazonLexModelBuildingV2ChannelsApiSchema)),
    botConfiguration: s.optional(s.record(s.string(), s.string())),
    status: s.optional(s.lazy(() => statusAmazonLexModelBuildingV2ChannelsApiSchema)),
    failureReason: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
