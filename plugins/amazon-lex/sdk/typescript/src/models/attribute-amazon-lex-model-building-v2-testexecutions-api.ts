import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether to sort the test set executions by the date and time at which the test sets
 * were created.
 */
export const AttributeAmazonLexModelBuildingV2TestexecutionsApi = {
  TestSetName: "TestSetName",
  CreationDateTime: "CreationDateTime",
} as const;
export type AttributeAmazonLexModelBuildingV2TestexecutionsApi =
  | (typeof AttributeAmazonLexModelBuildingV2TestexecutionsApi)[keyof typeof AttributeAmazonLexModelBuildingV2TestexecutionsApi]
  | (string & {});

export const attributeAmazonLexModelBuildingV2TestexecutionsApiSchema: EnumSchema<AttributeAmazonLexModelBuildingV2TestexecutionsApi> =
  s.enumOf<AttributeAmazonLexModelBuildingV2TestexecutionsApi>(
    AttributeAmazonLexModelBuildingV2TestexecutionsApi,
  );
