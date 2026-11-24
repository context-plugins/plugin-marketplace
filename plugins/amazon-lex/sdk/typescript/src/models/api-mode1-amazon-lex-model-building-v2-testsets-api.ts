import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether we use streaming or non-streaming APIs for the test set execution. For
 * streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming,
 * RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
 */
export const ApiMode1AmazonLexModelBuildingV2TestsetsApi = {
  Streaming: "Streaming",
  NonStreaming: "NonStreaming",
} as const;
export type ApiMode1AmazonLexModelBuildingV2TestsetsApi =
  | (typeof ApiMode1AmazonLexModelBuildingV2TestsetsApi)[keyof typeof ApiMode1AmazonLexModelBuildingV2TestsetsApi]
  | (string & {});

export const apiMode1AmazonLexModelBuildingV2TestsetsApiSchema: EnumSchema<ApiMode1AmazonLexModelBuildingV2TestsetsApi> =
  s.enumOf<ApiMode1AmazonLexModelBuildingV2TestsetsApi>(ApiMode1AmazonLexModelBuildingV2TestsetsApi);
