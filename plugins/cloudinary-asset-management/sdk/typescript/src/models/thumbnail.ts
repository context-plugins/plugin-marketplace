import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The thumbnail image for a person. */
export type Thumbnail = {
  /** The external ID of the asset used for the thumbnail. */
  assetId?: string;
  /** The bounding box coordinates [x, y, width, height] of the face in the asset. */
  boundingBox?: number[];
  /** The secure URL of the thumbnail asset. */
  url?: string;
  /** The resource type of the asset. */
  resourceType?: string;
  /** The kind/type of the asset. */
  type?: string;
  /** The public ID of the asset. */
  publicId?: string;
  /** The version number of the asset. */
  version?: number;
};

export const thumbnailSchema: Schema<Thumbnail> = s.object<Thumbnail>({
  assetId: s.optional(s.string()),
  boundingBox: s.optional(s.array(s.int())),
  url: s.optional(s.string()),
  resourceType: s.optional(s.string()),
  type: s.optional(s.string()),
  publicId: s.optional(s.string()),
  version: s.optional(s.int()),
  _keysMap: {
    assetId: "asset_id",
    boundingBox: "bounding_box",
    resourceType: "resource_type",
    publicId: "public_id",
  },
});
