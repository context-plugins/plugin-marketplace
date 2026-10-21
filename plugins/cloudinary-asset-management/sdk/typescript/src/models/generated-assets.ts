import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { generatedAssetSchema, type GeneratedAsset } from "./generated-asset.js";

/** Wrapper holding the array of generated assets. */
export type GeneratedAssets = {
  /** The generated assets. Currently a single asset is returned. */
  assets: GeneratedAsset[];
};

export const generatedAssetsSchema: Schema<GeneratedAssets> = s.object<GeneratedAssets>({
  assets: s.array(s.lazy(() => generatedAssetSchema)),
});
