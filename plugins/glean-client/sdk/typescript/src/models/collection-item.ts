import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionSchema, type Collection } from "./collection.js";
import { documentSchema, type Document } from "./document.js";
import { itemTypeSchema, type ItemType } from "./item-type.js";
import { personSchema, type Person } from "./person.js";
import { shortcutSchema, type Shortcut } from "./shortcut.js";

export type CollectionItem = {
  /** The optional name of the Collection item. */
  name?: string;
  /** A helpful description of why this CollectionItem is in the Collection that it's in. */
  description?: string;
  /** The emoji icon for this CollectionItem. Only used for Text type items. */
  icon?: string;
  /** The Collection ID of the Collection that this CollectionItem belongs in. */
  collectionId: number;
  /** If this CollectionItem is indexed, the Glean Document ID of that document. */
  documentId?: string;
  /** The URL of this CollectionItem. */
  url?: string;
  /** Unique identifier for the item within the Collection it belongs to. */
  itemId?: string;
  createdBy?: Person;
  /** Unix timestamp for when the item was first added (in seconds since epoch UTC). */
  createdAt?: Date;
  document?: Document;
  shortcut?: Shortcut;
  collection?: Collection;
  itemType: ItemType;
};

export const collectionItemSchema: Schema<CollectionItem> = s.object<CollectionItem>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  icon: s.optional(s.string()),
  collectionId: s.int(),
  documentId: s.optional(s.string()),
  url: s.optional(s.string()),
  itemId: s.optional(s.string()),
  createdBy: s.optional(s.lazy(() => personSchema)),
  createdAt: s.optional(s.dateTime()),
  document: s.optional(s.lazy(() => documentSchema)),
  shortcut: s.optional(s.lazy(() => shortcutSchema)),
  collection: s.optional(s.lazy(() => collectionSchema)),
  itemType: itemTypeSchema,
});
