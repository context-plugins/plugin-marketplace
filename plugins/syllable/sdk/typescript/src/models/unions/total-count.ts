import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The total number of items returned from the query */
export type TotalCount = number;

export const totalCountSchema: Schema<TotalCount> = s.of<TotalCount>(s.union([s.int()]));
