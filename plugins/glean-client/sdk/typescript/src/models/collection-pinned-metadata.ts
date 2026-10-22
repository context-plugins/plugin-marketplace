import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionPinMetadataSchema, type CollectionPinMetadata } from "./collection-pin-metadata.js";
import { collectionPinTargetSchema, type CollectionPinTarget } from "./collection-pin-target.js";

export type CollectionPinnedMetadata = {
  /** List of targets this Collection is pinned to. */
  existingPins?: CollectionPinTarget[];
  /**
   * List of targets this Collection can be pinned to, excluding the targets this Collection is
   * already pinned to. We also include Collection ID already is pinned to each eligible target,
   * which will be 0 if the target has no pinned Collection.
   */
  eligiblePins?: CollectionPinMetadata[];
};

export const collectionPinnedMetadataSchema: Schema<CollectionPinnedMetadata> =
  s.object<CollectionPinnedMetadata>({
    existingPins: s.optional(s.array(s.lazy(() => collectionPinTargetSchema))),
    eligiblePins: s.optional(s.array(s.lazy(() => collectionPinMetadataSchema))),
  });
