import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The UPC for the item. */
export type Upc = string;

export const upcSchema: Schema<Upc> = s.of<Upc>(s.union([s.string()]));
