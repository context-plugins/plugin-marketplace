import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sortBySchema, type SortBy } from "../sort-by.js";
import { sortBy1Schema, type SortBy1 } from "../sort-by1.js";
import { sortBy2Schema, type SortBy2 } from "../sort-by2.js";
import { sortBy3Schema, type SortBy3 } from "../sort-by3.js";

/** The field to sort the gift cards by. */
export type SortBy41 = SortBy | SortBy1 | SortBy2 | SortBy3;

export const sortBy41Schema: Schema<SortBy41> = s.of<SortBy41>(
  s.union([
    s.lazy(() => sortBySchema),
    s.lazy(() => sortBy1Schema),
    s.lazy(() => sortBy2Schema),
    s.lazy(() => sortBy3Schema),
  ]),
);
