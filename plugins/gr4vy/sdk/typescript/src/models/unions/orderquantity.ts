import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Number of items ordered. */
export type Orderquantity = string;

export const orderquantitySchema: Schema<Orderquantity> = s.of<Orderquantity>(s.union([s.string()]));
