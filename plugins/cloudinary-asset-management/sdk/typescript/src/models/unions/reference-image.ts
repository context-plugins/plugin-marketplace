import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { managedAssetReferenceSchema, type ManagedAssetReference } from "../managed-asset-reference.js";
import { urlReferenceSchema, type UrlReference } from "../url-reference.js";

/**
 * A single reference image, in **one** of two mutually exclusive forms determined by `source_type`:
 *   * `ManagedAssetReference`: a managed asset in the caller's product environment, by `asset_id`
 *     (read permission is checked).
 *   * `UrlReference`: an external image by HTTPS `url`.
 */
export type ReferenceImage =
  | (ManagedAssetReference & { sourceType: "managed_asset" })
  | (UrlReference & { sourceType: "url" });

export const referenceImageSchema: Schema<ReferenceImage> = s.discriminatedUnion<ReferenceImage>(
  "source_type",
  {
    managed_asset: managedAssetReferenceSchema,
    url: urlReferenceSchema,
  },
);
