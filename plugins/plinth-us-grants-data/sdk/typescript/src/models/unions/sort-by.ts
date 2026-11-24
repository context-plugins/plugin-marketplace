import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SortBy = string;

export const sortBySchema: Schema<SortBy> = s.of<SortBy>(s.union([s.string()]));
