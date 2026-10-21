import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { viewLinkedResourceSchema, type ViewLinkedResource } from "./view-linked-resource.js";
import { viewsPaginatedLinksSchema, type ViewsPaginatedLinks } from "./views-paginated-links.js";

export type ViewLinkedResources = {
  links?: ViewsPaginatedLinks;
  items: ViewLinkedResource[];
  totalCount: number;
};

export const viewLinkedResourcesSchema: Schema<ViewLinkedResources> = s.object<ViewLinkedResources>({
  links: s.optional(s.lazy(() => viewsPaginatedLinksSchema)),
  items: s.array(s.lazy(() => viewLinkedResourceSchema)),
  totalCount: s.int(),
  _keysMap: {
    links: "_links",
  },
});
