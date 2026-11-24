import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of list (e.g., ordered, unordered). */
export const ListType = {
  Ordered: "ordered",
  Unordered: "unordered",
} as const;
export type ListType = (typeof ListType)[keyof typeof ListType] | (string & {});

export const listTypeSchema: EnumSchema<ListType> = s.enumOf<ListType>(ListType);
