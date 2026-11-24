import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Asc 3 = Desc */
export const OrderBy = {
  _1: 1,
  _3: 3,
} as const;
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy] | (number & {});

export const orderBySchema: EnumSchema<OrderBy> = s.enumOf<OrderBy>(OrderBy);
