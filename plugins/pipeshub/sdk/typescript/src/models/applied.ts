import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permissionSchema, type Permission } from "./permission.js";
import { sortBySchema, type SortBy } from "./sort-by.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

/**
 * Active filters. Empty `{}` when defaults. Keys use snake_case for sort fields (backend convention
 * in kb_service.py).
 */
export type Applied = {
  search?: string;
  permissions?: Permission[];
  sortBy?: SortBy;
  sortOrder?: SortOrder;
};

export const appliedSchema: Schema<Applied> = s.object<Applied>({
  search: s.optional(s.string()),
  permissions: s.optional(s.array(s.lazy(() => permissionSchema))),
  sortBy: s.optional(s.lazy(() => sortBySchema)),
  sortOrder: s.optional(s.lazy(() => sortOrderSchema)),
  _keysMap: {
    sortBy: "sort_by",
    sortOrder: "sort_order",
  },
});
