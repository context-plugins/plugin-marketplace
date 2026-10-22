import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Store the output as a permanent managed asset in your Cloudinary product environment (the
 * default).
 */
export type ManagedAssetTarget = {
  /** Discriminator identifying this as a managed-asset target. @default "managed_asset" */
  targetType?: "managed_asset";
  /** Public ID to store the asset under. Auto-assigned when omitted. */
  publicId?: string;
  /** Upload preset to apply. Uses the product environment's default when omitted. */
  uploadPreset?: string;
};

export const managedAssetTargetSchema: Schema<ManagedAssetTarget> = s.object<ManagedAssetTarget>({
  targetType: s.defaulted(s.literal("managed_asset"), "managed_asset"),
  publicId: s.optional(s.string()),
  uploadPreset: s.optional(s.string()),
  _keysMap: {
    targetType: "target_type",
    publicId: "public_id",
    uploadPreset: "upload_preset",
  },
});
