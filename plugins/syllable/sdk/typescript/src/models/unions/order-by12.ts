import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orderBySchema, type OrderBy } from "../order-by.js";

/** The field whose value should be used to order the results */
export type OrderBy12 = OrderBy;

export const orderBy12Schema: Schema<OrderBy12> = s.of<OrderBy12>(s.union([s.lazy(() => orderBySchema)]));
