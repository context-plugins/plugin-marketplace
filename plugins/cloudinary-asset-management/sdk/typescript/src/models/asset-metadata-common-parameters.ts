import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./unions/delivery-type-all1.js";

/** Fields common to every bulk metadata-management operation. */
export type AssetMetadataCommonParameters = {
  /**
   * The public IDs of the assets to apply the operation to. At most 1000 are processed per request;
   * any beyond the first 1000 are ignored rather than rejected. Public IDs that do not exist, or
   * that the caller lacks update permission for, are skipped rather than failing the request, so
   * the returned `public_ids` may be shorter than the requested list.
   */
  publicIds: string[];
  /** The delivery type of the assets to operate on. Defaults to `upload`. */
  type?: DeliveryTypeAll1;
};

export const assetMetadataCommonParametersSchema: Schema<AssetMetadataCommonParameters> =
  s.object<AssetMetadataCommonParameters>({
    publicIds: s.array(s.string()),
    type: s.optional(s.lazy(() => deliveryTypeAll1Schema)),
    _keysMap: {
      publicIds: "public_ids",
    },
  });
