import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the bot. When the status is BUILDING Amazon Lex is building the bot for testing and
 * use. If the status of the bot is READY_BASIC_TESTING, you can test the bot using the exact
 * utterances specified in the bot's intents. When the bot is ready for full testing or to run, the
 * status is READY. If there was a problem with building the bot, the status is FAILED and the
 * failureReason field explains why the bot did not build. If the bot was saved but not built, the
 * status is NOT_BUILT.
 */
export const Status1AmazonLexModelBuildingV2VersionsApi = {
  Building: "BUILDING",
  Ready: "READY",
  ReadyBasicTesting: "READY_BASIC_TESTING",
  Failed: "FAILED",
  NotBuilt: "NOT_BUILT",
} as const;
export type Status1AmazonLexModelBuildingV2VersionsApi =
  | (typeof Status1AmazonLexModelBuildingV2VersionsApi)[keyof typeof Status1AmazonLexModelBuildingV2VersionsApi]
  | (string & {});

export const status1AmazonLexModelBuildingV2VersionsApiSchema: EnumSchema<Status1AmazonLexModelBuildingV2VersionsApi> =
  s.enumOf<Status1AmazonLexModelBuildingV2VersionsApi>(Status1AmazonLexModelBuildingV2VersionsApi);
