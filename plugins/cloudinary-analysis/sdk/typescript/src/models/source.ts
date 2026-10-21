import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Source = {
  /** The asset ID to analyze */
  assetId: string;
  /** The URI of the asset to analyze */
  uri?: string;
};

export const sourceSchema: Schema<Source> = s.object<Source>({
  assetId: s.string(),
  uri: s.optional(s.string()),
  _keysMap: {
    assetId: "asset_id",
  },
});
