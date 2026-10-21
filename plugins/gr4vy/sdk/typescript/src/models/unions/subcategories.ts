import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A list of strings containing product subcategories for the item. */
export type Subcategories = string[];

export const subcategoriesSchema: Schema<Subcategories> = s.of<Subcategories>(s.union([s.array(s.string())]));
