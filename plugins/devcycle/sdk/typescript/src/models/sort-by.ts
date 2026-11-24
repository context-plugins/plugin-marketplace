import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy = {
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
  Name: "name",
  Key: "key",
  PropertyKey: "propertyKey",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
