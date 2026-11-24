import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When you send a request to create or update a bot, Amazon Lex sets the status response element to
 * BUILDING. After Amazon Lex builds the bot, it sets status to READY. If Amazon Lex can't build the
 * bot, it sets status to FAILED. Amazon Lex returns the reason for the failure in the failureReason
 * response element.
 */
export const Status2AmazonLexModelBuildingV2VersionsApi = {
  Building: "BUILDING",
  Ready: "READY",
  ReadyBasicTesting: "READY_BASIC_TESTING",
  Failed: "FAILED",
  NotBuilt: "NOT_BUILT",
} as const;
export type Status2AmazonLexModelBuildingV2VersionsApi =
  | (typeof Status2AmazonLexModelBuildingV2VersionsApi)[keyof typeof Status2AmazonLexModelBuildingV2VersionsApi]
  | (string & {});

export const status2AmazonLexModelBuildingV2VersionsApiSchema: EnumSchema<Status2AmazonLexModelBuildingV2VersionsApi> =
  s.enumOf<Status2AmazonLexModelBuildingV2VersionsApi>(Status2AmazonLexModelBuildingV2VersionsApi);
