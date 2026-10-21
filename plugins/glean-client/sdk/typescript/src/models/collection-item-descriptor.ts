import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemType1Schema, type ItemType1 } from "./item-type1.js";

/** All Of CollectionItemMutableProperties, CollectionItemDescriptor. */
export type CollectionItemDescriptor = {
  /** The optional name of the Collection item. */
  name?: string;
  /** A helpful description of why this CollectionItem is in the Collection that it's in. */
  description?: string;
  /** The emoji icon for this CollectionItem. Only used for Text type items. */
  icon?: string;
  /** The URL of the item being added. */
  url?: string;
  /** The Glean Document ID of the item being added if it's an indexed document. */
  documentId?: string;
  /**
   * The (optional) ItemId of the next CollectionItem in sequence. If omitted, will be added to the
   * end of the Collection
   */
  newNextItemId?: string;
  itemType?: ItemType1;
};

export const collectionItemDescriptorSchema: Schema<CollectionItemDescriptor> =
  s.object<CollectionItemDescriptor>({
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    icon: s.optional(s.string()),
    url: s.optional(s.string()),
    documentId: s.optional(s.string()),
    newNextItemId: s.optional(s.string()),
    itemType: s.optional(s.lazy(() => itemType1Schema)),
  });
