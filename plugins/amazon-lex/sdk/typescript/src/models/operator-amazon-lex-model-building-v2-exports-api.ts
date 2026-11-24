import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operator to use for the filter. Specify EQ when the ListExports operation should return only
 * resource types that equal the specified value. Specify CO when the ListExports operation should
 * return resource types that contain the specified value.
 */
export const OperatorAmazonLexModelBuildingV2ExportsApi = {
  Co: "CO",
  Eq: "EQ",
} as const;
export type OperatorAmazonLexModelBuildingV2ExportsApi =
  | (typeof OperatorAmazonLexModelBuildingV2ExportsApi)[keyof typeof OperatorAmazonLexModelBuildingV2ExportsApi]
  | (string & {});

export const operatorAmazonLexModelBuildingV2ExportsApiSchema: EnumSchema<OperatorAmazonLexModelBuildingV2ExportsApi> =
  s.enumOf<OperatorAmazonLexModelBuildingV2ExportsApi>(OperatorAmazonLexModelBuildingV2ExportsApi);
