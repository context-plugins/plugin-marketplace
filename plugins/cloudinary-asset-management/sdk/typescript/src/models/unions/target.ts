import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { managedAssetTargetSchema, type ManagedAssetTarget } from "../managed-asset-target.js";
import { temporaryTargetSchema, type TemporaryTarget } from "../temporary-target.js";

/**
 * Where to store the generated output, determined by `target_type`. Optional; defaults to a
 * `managed_asset` target when omitted.
 */
export type Target =
  | (ManagedAssetTarget & { targetType: "managed_asset" })
  | (TemporaryTarget & { targetType: "temporary" });

export const targetSchema: Schema<Target> = s.discriminatedUnion<Target>("target_type", {
  managed_asset: managedAssetTargetSchema,
  temporary: temporaryTargetSchema,
});
