import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operator to use for the filter. Specify EQ when the ListImports operation should return only
 * resource types that equal the specified value. Specify CO when the ListImports operation should
 * return resource types that contain the specified value.
 */
export const OperatorAmazonLexModelBuildingV2ImportsApi = {
  Co: "CO",
  Eq: "EQ",
} as const;
export type OperatorAmazonLexModelBuildingV2ImportsApi =
  | (typeof OperatorAmazonLexModelBuildingV2ImportsApi)[keyof typeof OperatorAmazonLexModelBuildingV2ImportsApi]
  | (string & {});

export const operatorAmazonLexModelBuildingV2ImportsApiSchema: EnumSchema<OperatorAmazonLexModelBuildingV2ImportsApi> =
  s.enumOf<OperatorAmazonLexModelBuildingV2ImportsApi>(OperatorAmazonLexModelBuildingV2ImportsApi);
