import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A list of asset folder paths to include in the archive, or a single folder path string. Only
 * available when asset folders are enabled for your account.
 */
export type AssetFolders = string[] | string;

export const assetFoldersSchema: Schema<AssetFolders> = s.of<AssetFolders>(
  s.union([s.array(s.string()), s.string()]),
);
