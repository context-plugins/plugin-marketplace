import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether we use streaming or non-streaming APIs for the test set execution. For
 * streaming, StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance
 * and RecognizeText Amazon Lex Runtime API are used.
 */
export const ApiModeAmazonLexModelBuildingV2TestsetsApi = {
  Streaming: "Streaming",
  NonStreaming: "NonStreaming",
} as const;
export type ApiModeAmazonLexModelBuildingV2TestsetsApi =
  | (typeof ApiModeAmazonLexModelBuildingV2TestsetsApi)[keyof typeof ApiModeAmazonLexModelBuildingV2TestsetsApi]
  | (string & {});

export const apiModeAmazonLexModelBuildingV2TestsetsApiSchema: EnumSchema<ApiModeAmazonLexModelBuildingV2TestsetsApi> =
  s.enumOf<ApiModeAmazonLexModelBuildingV2TestsetsApi>(ApiModeAmazonLexModelBuildingV2TestsetsApi);
