import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SubCategory = string;

export const subCategorySchema: Schema<SubCategory> = s.of<SubCategory>(s.union([s.string()]));
