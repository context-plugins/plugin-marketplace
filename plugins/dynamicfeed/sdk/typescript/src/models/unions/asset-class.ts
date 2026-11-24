import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** crypto | stock | index | forex | commodity | metal */
export type AssetClass = string;

export const assetClassSchema: Schema<AssetClass> = s.of<AssetClass>(s.union([s.string()]));
