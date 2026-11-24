import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderBy = {
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
  DeletedAt: "deletedAt",
} as const;
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy] | (string & {});

export const orderBySchema: EnumSchema<OrderBy> = s.enumOf<OrderBy>(OrderBy);
