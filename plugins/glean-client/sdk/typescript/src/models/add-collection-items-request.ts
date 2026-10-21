import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  collectionItemDescriptorSchema,
  type CollectionItemDescriptor,
} from "./collection-item-descriptor.js";

export type AddCollectionItemsRequest = {
  /** The ID of the Collection to add items to. */
  collectionId: number;
  /** The CollectionItemDescriptors of the items being added. */
  addedCollectionItemDescriptors?: CollectionItemDescriptor[];
};

export const addCollectionItemsRequestSchema: Schema<AddCollectionItemsRequest> =
  s.object<AddCollectionItemsRequest>({
    collectionId: s.float64(),
    addedCollectionItemDescriptors: s.optional(s.array(s.lazy(() => collectionItemDescriptorSchema))),
  });
