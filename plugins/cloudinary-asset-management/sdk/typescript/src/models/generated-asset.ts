import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./format.js";
import { modelSchema, type Model } from "./model.js";
import { storage1Schema, type Storage1 } from "./unions/storage1.js";

/**
 * A generated asset: where it is stored (`storage`) plus its media metadata. The media fields are
 * populated once the task completes; an in-progress asset carries only `storage`.
 */
export type GeneratedAsset = {
  /**
   * Where a generated asset is stored — mirrors the request `target`, determined by `storage_type`.
   * `secure_url` is always present.
   */
  storage: Storage1;
  /** The image format of the stored asset. */
  format?: Format;
  /** The width of the generated image in pixels; zero if the model doesn't provide dimensions. */
  width?: number;
  /** The height of the generated image in pixels; zero if the model doesn't provide dimensions. */
  height?: number;
  /** The size of the generated image in bytes. */
  bytes?: number;
  /** Identifies the model that produced a generation result. */
  model?: Model;
  /**
   * The seed used for generation. Echoes input or returns the model-generated seed. Null when the
   * model doesn't support seeds.
   */
  seed?: number | null;
  /** The timestamp when the image was generated. */
  createdAt?: Date;
};

export const generatedAssetSchema: Schema<GeneratedAsset> = s.object<GeneratedAsset>({
  storage: storage1Schema,
  format: s.optional(s.lazy(() => formatSchema)),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
  bytes: s.optional(s.int()),
  model: s.optional(s.lazy(() => modelSchema)),
  seed: s.optionalNullable(s.int()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    createdAt: "created_at",
  },
});
