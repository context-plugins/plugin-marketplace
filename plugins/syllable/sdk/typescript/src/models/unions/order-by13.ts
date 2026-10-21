import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orderBy1Schema, type OrderBy1 } from "../order-by1.js";

/** The field whose value should be used to order the results */
export type OrderBy13 = OrderBy1;

export const orderBy13Schema: Schema<OrderBy13> = s.of<OrderBy13>(s.union([s.lazy(() => orderBy1Schema)]));
