import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required direction used to sort results. Accepts asc or desc. */
export const SortOrder = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder] | (string & {});

export const sortOrderSchema: EnumSchema<SortOrder> = s.enumOf<SortOrder>(SortOrder);
