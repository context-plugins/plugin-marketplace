import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orderByDirectionSchema, type OrderByDirection } from "../order-by-direction.js";

/** Direction to order results */
export type OrderByDirection22 = OrderByDirection;

export const orderByDirection22Schema: Schema<OrderByDirection22> = s.of<OrderByDirection22>(
  s.union([s.lazy(() => orderByDirectionSchema)]),
);
