import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promotionReferenceSchema, type PromotionReference } from "./unions/promotion-reference.js";

export type LatitudeOptions = {
  /** The `promotionReference` field passed to the purchase API. */
  promotionReference?: PromotionReference;
};

export const latitudeOptionsSchema: Schema<LatitudeOptions> = s.object<LatitudeOptions>({
  promotionReference: s.optional(s.lazy(() => promotionReferenceSchema)),
  _keysMap: {
    promotionReference: "promotion_reference",
  },
});
