import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The SKU or product code for the item. */
export type Sku = string;

export const skuSchema: Schema<Sku> = s.of<Sku>(s.union([s.string()]));
