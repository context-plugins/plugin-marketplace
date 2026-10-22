import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderBySchema, type OrderBy } from "./order-by.js";

export type SortOptions = {
  orderBy?: OrderBy;
  sortBy?: string;
};

export const sortOptionsSchema: Schema<SortOptions> = s.object<SortOptions>({
  orderBy: s.optional(s.lazy(() => orderBySchema)),
  sortBy: s.optional(s.string()),
});
