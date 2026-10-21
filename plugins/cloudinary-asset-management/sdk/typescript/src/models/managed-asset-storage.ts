import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceType8Schema, type ResourceType8 } from "./resource-type8.js";

/**
 * A generated asset stored as a permanent managed asset. Reference it in other Cloudinary APIs by
 * `asset_id`, or by the `resource_type` / `type` / `public_id` triple.
 */
export type ManagedAssetStorage = {
  /** Discriminator identifying this as managed-asset storage. @default "managed_asset" */
  storageType?: "managed_asset";
  /** The URL to fetch the generated asset. */
  secureUrl: string;
  /** Cloudinary asset ID — a stable, globally-unique reference to the asset. */
  assetId?: string;
  /** Public ID of the stored asset. */
  publicId: string;
  /** Cloudinary resource type of the stored asset. */
  resourceType: ResourceType8;
  /** Cloudinary delivery type of the stored asset (e.g. `upload`, `private`, `authenticated`). */
  type: string;
  /** Version of the stored asset. */
  version: number;
};

export const managedAssetStorageSchema: Schema<ManagedAssetStorage> = s.object<ManagedAssetStorage>({
  storageType: s.defaulted(s.literal("managed_asset"), "managed_asset"),
  secureUrl: s.string(),
  assetId: s.optional(s.string()),
  publicId: s.string(),
  resourceType: resourceType8Schema,
  type: s.string(),
  version: s.int(),
  _keysMap: {
    storageType: "storage_type",
    secureUrl: "secure_url",
    assetId: "asset_id",
    publicId: "public_id",
    resourceType: "resource_type",
  },
});
