import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the bot recommendation. If the status is Failed, then the reasons for the failure
 * are listed in the failureReasons field.
 */
export const BotRecommendationStatus = {
  Processing: "Processing",
  Deleting: "Deleting",
  Deleted: "Deleted",
  Downloading: "Downloading",
  Updating: "Updating",
  Available: "Available",
  Failed: "Failed",
  Stopping: "Stopping",
  Stopped: "Stopped",
} as const;
export type BotRecommendationStatus =
  | (typeof BotRecommendationStatus)[keyof typeof BotRecommendationStatus]
  | (string & {});

export const botRecommendationStatusSchema: EnumSchema<BotRecommendationStatus> =
  s.enumOf<BotRecommendationStatus>(BotRecommendationStatus);
