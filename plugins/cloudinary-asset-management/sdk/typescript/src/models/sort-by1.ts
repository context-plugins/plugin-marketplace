import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy1 = {
  Name: "name",
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
} as const;
export type SortBy1 = (typeof SortBy1)[keyof typeof SortBy1] | (string & {});

export const sortBy1Schema: EnumSchema<SortBy1> = s.enumOf<SortBy1>(SortBy1);
