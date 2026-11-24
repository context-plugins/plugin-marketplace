import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether to sort in ascending or descending order. */
export const OrderAmazonLexModelBuildingV2TestexecutionsApi = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type OrderAmazonLexModelBuildingV2TestexecutionsApi =
  | (typeof OrderAmazonLexModelBuildingV2TestexecutionsApi)[keyof typeof OrderAmazonLexModelBuildingV2TestexecutionsApi]
  | (string & {});

export const orderAmazonLexModelBuildingV2TestexecutionsApiSchema: EnumSchema<OrderAmazonLexModelBuildingV2TestexecutionsApi> =
  s.enumOf<OrderAmazonLexModelBuildingV2TestexecutionsApi>(OrderAmazonLexModelBuildingV2TestexecutionsApi);
