import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order to sort the list. */
export const OrderAmazonLexModelBuildingV2ExportsApi = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type OrderAmazonLexModelBuildingV2ExportsApi =
  | (typeof OrderAmazonLexModelBuildingV2ExportsApi)[keyof typeof OrderAmazonLexModelBuildingV2ExportsApi]
  | (string & {});

export const orderAmazonLexModelBuildingV2ExportsApiSchema: EnumSchema<OrderAmazonLexModelBuildingV2ExportsApi> =
  s.enumOf<OrderAmazonLexModelBuildingV2ExportsApi>(OrderAmazonLexModelBuildingV2ExportsApi);
