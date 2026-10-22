import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Dollar value of the most expensive item ordered. */
export type Orderhighestcost = string;

export const orderhighestcostSchema: Schema<Orderhighestcost> = s.of<Orderhighestcost>(s.union([s.string()]));
