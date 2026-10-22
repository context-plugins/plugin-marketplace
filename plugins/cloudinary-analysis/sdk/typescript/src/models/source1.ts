import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Source1 = {
  /** The asset ID to analyze */
  assetId?: string;
  /** The URI of the asset to analyze */
  uri: string;
};

export const source1Schema: Schema<Source1> = s.object<Source1>({
  assetId: s.optional(s.string()),
  uri: s.string(),
  _keysMap: {
    assetId: "asset_id",
  },
});
