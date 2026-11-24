import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sortOrderSchema, type SortOrder } from "../sort-order.js";

export type SortOrder11 = SortOrder;

export const sortOrder11Schema: Schema<SortOrder11> = s.of<SortOrder11>(
  s.union([s.lazy(() => sortOrderSchema)]),
);
