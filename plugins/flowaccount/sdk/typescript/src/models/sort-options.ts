import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderBySchema, type OrderBy } from "./order-by.js";

export type SortOptions = {
  name?: string | null;
  /** 1 = Asc 3 = Desc */
  sortOrder?: OrderBy;
};

export const sortOptionsSchema: Schema<SortOptions> = s.object<SortOptions>({
  name: s.optionalNullable(s.string()),
  sortOrder: s.optional(s.lazy(() => orderBySchema)),
});
