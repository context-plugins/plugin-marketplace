import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WatchlistSortBy = {
  Id: "id",
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
  Name: "name",
} as const;
export type WatchlistSortBy = (typeof WatchlistSortBy)[keyof typeof WatchlistSortBy] | (string & {});

export const watchlistSortBySchema: EnumSchema<WatchlistSortBy> = s.enumOf<WatchlistSortBy>(WatchlistSortBy);
