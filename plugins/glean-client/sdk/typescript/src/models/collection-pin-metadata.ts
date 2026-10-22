import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionPinTargetSchema, type CollectionPinTarget } from "./collection-pin-target.js";

export type CollectionPinMetadata = {
  /** The ID of the Collection. */
  id: number;
  target: CollectionPinTarget;
};

export const collectionPinMetadataSchema: Schema<CollectionPinMetadata> = s.object<CollectionPinMetadata>({
  id: s.int(),
  target: collectionPinTargetSchema,
});
