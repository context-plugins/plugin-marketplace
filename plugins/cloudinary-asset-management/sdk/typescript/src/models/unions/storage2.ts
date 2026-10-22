import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { managedAssetStorageSchema, type ManagedAssetStorage } from "../managed-asset-storage.js";
import { temporaryStorageSchema, type TemporaryStorage } from "../temporary-storage.js";

/**
 * Where a generated asset is stored — mirrors the request `target`, determined by `storage_type`.
 * `secure_url` is always present.
 */
export type Storage2 =
  | (ManagedAssetStorage & { storageType: "managed_asset" })
  | (TemporaryStorage & { storageType: "temporary" });

export const storage2Schema: Schema<Storage2> = s.discriminatedUnion<Storage2>("storage_type", {
  managed_asset: managedAssetStorageSchema,
  temporary: temporaryStorageSchema,
});
