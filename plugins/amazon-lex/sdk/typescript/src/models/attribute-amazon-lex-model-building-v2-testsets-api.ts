import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether to sort the test sets by name or by the time they were last updated. */
export const AttributeAmazonLexModelBuildingV2TestsetsApi = {
  TestSetName: "TestSetName",
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;
export type AttributeAmazonLexModelBuildingV2TestsetsApi =
  | (typeof AttributeAmazonLexModelBuildingV2TestsetsApi)[keyof typeof AttributeAmazonLexModelBuildingV2TestsetsApi]
  | (string & {});

export const attributeAmazonLexModelBuildingV2TestsetsApiSchema: EnumSchema<AttributeAmazonLexModelBuildingV2TestsetsApi> =
  s.enumOf<AttributeAmazonLexModelBuildingV2TestsetsApi>(AttributeAmazonLexModelBuildingV2TestsetsApi);
