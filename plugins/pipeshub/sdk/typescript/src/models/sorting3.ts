import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sortBy5Schema, type SortBy5 } from "./sort-by5.js";
import { sortOrder6Schema, type SortOrder6 } from "./sort-order6.js";

/**
 * Sort applied to the conversation list. Field set echoes back the original list-endpoint sort
 * options even though this endpoint returns a single conversation.
 */
export type Sorting3 = {
  sortBy?: SortBy5;
  sortOrder?: SortOrder6;
};

export const sorting3Schema: Schema<Sorting3> = s.object<Sorting3>({
  sortBy: s.optional(s.lazy(() => sortBy5Schema)),
  sortOrder: s.optional(s.lazy(() => sortOrder6Schema)),
});
