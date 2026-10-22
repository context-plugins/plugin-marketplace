import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orderBy2Schema, type OrderBy2 } from "../order-by2.js";

/** The field whose value should be used to order the results */
export type OrderBy211 = OrderBy2;

export const orderBy211Schema: Schema<OrderBy211> = s.of<OrderBy211>(s.union([s.lazy(() => orderBy2Schema)]));
