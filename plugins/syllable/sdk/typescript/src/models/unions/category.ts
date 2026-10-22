import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Broad categorization of the event */
export type Category = string;

export const categorySchema: Schema<Category> = s.of<Category>(s.union([s.string()]));
