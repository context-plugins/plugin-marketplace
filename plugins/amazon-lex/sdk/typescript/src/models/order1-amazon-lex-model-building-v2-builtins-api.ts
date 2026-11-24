import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order to sort the list. You can choose ascending or descending. */
export const Order1AmazonLexModelBuildingV2BuiltinsApi = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
export type Order1AmazonLexModelBuildingV2BuiltinsApi =
  | (typeof Order1AmazonLexModelBuildingV2BuiltinsApi)[keyof typeof Order1AmazonLexModelBuildingV2BuiltinsApi]
  | (string & {});

export const order1AmazonLexModelBuildingV2BuiltinsApiSchema: EnumSchema<Order1AmazonLexModelBuildingV2BuiltinsApi> =
  s.enumOf<Order1AmazonLexModelBuildingV2BuiltinsApi>(Order1AmazonLexModelBuildingV2BuiltinsApi);
