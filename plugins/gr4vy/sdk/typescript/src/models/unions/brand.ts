import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The brand of the item. */
export type Brand = string;

export const brandSchema: Schema<Brand> = s.of<Brand>(s.union([s.string()]));
