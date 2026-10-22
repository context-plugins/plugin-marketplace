import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EditCollectionItemRequest = {
  /** The ID of the Collection to edit CollectionItems in. */
  collectionId: number;
  /** The ID of the CollectionItem to edit. */
  itemId: string;
  /** The optional name of the Collection item. */
  name?: string;
  /** A helpful description of why this CollectionItem is in the Collection that it's in. */
  description?: string;
  /** The emoji icon for this CollectionItem. Only used for Text type items. */
  icon?: string;
};

export const editCollectionItemRequestSchema: Schema<EditCollectionItemRequest> =
  s.object<EditCollectionItemRequest>({
    collectionId: s.int(),
    itemId: s.string(),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    icon: s.optional(s.string()),
  });
