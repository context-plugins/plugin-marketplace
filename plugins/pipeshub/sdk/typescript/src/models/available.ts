import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permissionSchema, type Permission } from "./permission.js";
import { sortFieldSchema, type SortField } from "./sort-field.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";

export type Available = {
  permissions: Permission[];
  sortFields: SortField[];
  sortOrders: SortOrder[];
};

export const availableSchema: Schema<Available> = s.object<Available>({
  permissions: s.array(s.lazy(() => permissionSchema)),
  sortFields: s.array(s.lazy(() => sortFieldSchema)),
  sortOrders: s.array(s.lazy(() => sortOrderSchema)),
});
