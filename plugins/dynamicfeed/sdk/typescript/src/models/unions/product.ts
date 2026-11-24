import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** filter by product (e.g. Windows, PAN-OS), exact product, e.g. python, nodejs, postgresql */
export type Product = string;

export const productSchema: Schema<Product> = s.of<Product>(s.union([s.string()]));
