import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether audio or text is used. */
export const TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi = {
  Text: "Text",
  Audio: "Audio",
} as const;
export type TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi =
  | (typeof TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi)[keyof typeof TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi]
  | (string & {});

export const testExecutionModalityAmazonLexModelBuildingV2TestsetsApiSchema: EnumSchema<TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi> =
  s.enumOf<TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi>(
    TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi,
  );
