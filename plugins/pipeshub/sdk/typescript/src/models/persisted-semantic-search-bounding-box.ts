import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Bounding box subdocument embedded in persisted citation metadata. `boundingBoxSchema` does not
 * set `_id: false`, so Mongoose auto-injects an `_id`.
 */
export type PersistedSemanticSearchBoundingBox = {
  id: string;
  x: number;
  y: number;
};

export const persistedSemanticSearchBoundingBoxSchema: Schema<PersistedSemanticSearchBoundingBox> =
  s.object<PersistedSemanticSearchBoundingBox>({
    id: s.string(),
    x: s.float64(),
    y: s.float64(),
    _keysMap: {
      id: "_id",
    },
  });
