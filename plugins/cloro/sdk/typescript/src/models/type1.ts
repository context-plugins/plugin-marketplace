import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Discriminates plain text ads (`RESULT`) from shopping-style sponsored cards (`SHOPPING_CARD`).
 * Shopping cards appear in the right-hand-side PLA carousel, the top-of-page PLA carousel, and the
 * top-of-page sponsored shopping-card carousels (vehicles, products, hotels, …).
 */
export const Type1 = {
  Result: "RESULT",
  ShoppingCard: "SHOPPING_CARD",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
