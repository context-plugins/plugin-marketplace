import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the bot channel. CREATED - The channel has been created and is ready for use.
 * IN_PROGRESS - Channel creation is in progress. FAILED - There was an error creating the channel.
 * For information about the reason for the failure, see the failureReason field.
 */
export const StatusAmazonLexModelBuildingV2ChannelsApi = {
  InProgress: "IN_PROGRESS",
  Created: "CREATED",
  Failed: "FAILED",
} as const;
export type StatusAmazonLexModelBuildingV2ChannelsApi =
  | (typeof StatusAmazonLexModelBuildingV2ChannelsApi)[keyof typeof StatusAmazonLexModelBuildingV2ChannelsApi]
  | (string & {});

export const statusAmazonLexModelBuildingV2ChannelsApiSchema: EnumSchema<StatusAmazonLexModelBuildingV2ChannelsApi> =
  s.enumOf<StatusAmazonLexModelBuildingV2ChannelsApi>(StatusAmazonLexModelBuildingV2ChannelsApi);
