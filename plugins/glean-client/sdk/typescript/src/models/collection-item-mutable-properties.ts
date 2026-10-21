import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CollectionItemMutableProperties = {
  /** The optional name of the Collection item. */
  name?: string;
  /** A helpful description of why this CollectionItem is in the Collection that it's in. */
  description?: string;
  /** The emoji icon for this CollectionItem. Only used for Text type items. */
  icon?: string;
};

export const collectionItemMutablePropertiesSchema: Schema<CollectionItemMutableProperties> =
  s.object<CollectionItemMutableProperties>({
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    icon: s.optional(s.string()),
  });
