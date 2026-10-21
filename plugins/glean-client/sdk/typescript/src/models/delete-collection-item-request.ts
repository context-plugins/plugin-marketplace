import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteCollectionItemRequest = {
  /** The ID of the Collection to remove an item in. */
  collectionId: number;
  /** The item ID of the CollectionItem to remove from this Collection. */
  itemId: string;
  /**
   * The (optional) Glean Document ID of the CollectionItem to remove from this Collection if this
   * is an indexed document.
   */
  documentId?: string;
};

export const deleteCollectionItemRequestSchema: Schema<DeleteCollectionItemRequest> =
  s.object<DeleteCollectionItemRequest>({
    collectionId: s.float64(),
    itemId: s.string(),
    documentId: s.optional(s.string()),
  });
