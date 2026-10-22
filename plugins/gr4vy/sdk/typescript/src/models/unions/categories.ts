import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A list of strings containing product categories for the item. */
export type Categories = string[];

export const categoriesSchema: Schema<Categories> = s.of<Categories>(s.union([s.array(s.string())]));
