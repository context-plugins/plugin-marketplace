import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  expandedLinkedResourcesItemsSchema,
  type ExpandedLinkedResourcesItems,
} from "./expanded-linked-resources-items.js";

/** Details on linked resources for a view - requires passing the 'allResources' expand field */
export type ExpandedLinkedResources = {
  items: ExpandedLinkedResourcesItems;
  totalCount: number;
};

export const expandedLinkedResourcesSchema: Schema<ExpandedLinkedResources> =
  s.object<ExpandedLinkedResources>({
    items: expandedLinkedResourcesItemsSchema,
    totalCount: s.int(),
  });
