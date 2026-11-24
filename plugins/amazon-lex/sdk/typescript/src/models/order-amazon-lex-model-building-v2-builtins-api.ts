import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order to sort the list. You can specify ascending or descending order. */
export const OrderAmazonLexModelBuildingV2BuiltinsApi = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type OrderAmazonLexModelBuildingV2BuiltinsApi =
  | (typeof OrderAmazonLexModelBuildingV2BuiltinsApi)[keyof typeof OrderAmazonLexModelBuildingV2BuiltinsApi]
  | (string & {});

export const orderAmazonLexModelBuildingV2BuiltinsApiSchema: EnumSchema<OrderAmazonLexModelBuildingV2BuiltinsApi> =
  s.enumOf<OrderAmazonLexModelBuildingV2BuiltinsApi>(OrderAmazonLexModelBuildingV2BuiltinsApi);
