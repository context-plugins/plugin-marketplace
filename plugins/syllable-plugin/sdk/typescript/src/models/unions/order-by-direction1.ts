import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orderByDirectionSchema, type OrderByDirection } from "../order-by-direction.js";

/** The direction in which to order the results */
export type OrderByDirection1 = OrderByDirection;

export const orderByDirection1Schema: Schema<OrderByDirection1> = s.of<OrderByDirection1>(
  s.union([s.lazy(() => orderByDirectionSchema)]),
);
