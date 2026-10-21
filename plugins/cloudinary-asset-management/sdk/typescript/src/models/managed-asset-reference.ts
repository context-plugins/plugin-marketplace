import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A reference to a managed asset in the caller's product environment, by asset ID. */
export type ManagedAssetReference = {
  /** Discriminator identifying this as a managed-asset reference. @default "managed_asset" */
  sourceType?: "managed_asset";
  /** Cloudinary asset ID of the reference image. READ permission is enforced. */
  assetId: string;
};

export const managedAssetReferenceSchema: Schema<ManagedAssetReference> = s.object<ManagedAssetReference>({
  sourceType: s.defaulted(s.literal("managed_asset"), "managed_asset"),
  assetId: s.string(),
  _keysMap: {
    sourceType: "source_type",
    assetId: "asset_id",
  },
});
