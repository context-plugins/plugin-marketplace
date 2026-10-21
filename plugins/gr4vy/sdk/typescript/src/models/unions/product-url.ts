import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The product URL for the item. */
export type ProductUrl = string;

export const productUrlSchema: Schema<ProductUrl> = s.of<ProductUrl>(s.union([s.string()]));
