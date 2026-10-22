import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Static asset delivery type. */
export const AssetDeliveryType = {
  Asset: "asset",
} as const;
export type AssetDeliveryType = (typeof AssetDeliveryType)[keyof typeof AssetDeliveryType] | (string & {});

export const assetDeliveryTypeSchema: EnumSchema<AssetDeliveryType> =
  s.enumOf<AssetDeliveryType>(AssetDeliveryType);
