import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { methodSchema, type Method } from "../method.js";

/**
 * Filters for transactions that have matching `method` values. For best performance, combine it
 * with `created_at_gte` and `created_at_lte`.
 */
export type Method11 = Method[];

export const method11Schema: Schema<Method11> = s.of<Method11>(
  s.union([s.array(s.lazy(() => methodSchema))]),
);
