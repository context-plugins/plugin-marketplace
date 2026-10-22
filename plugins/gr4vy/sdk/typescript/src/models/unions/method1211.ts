import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { method122Schema, type Method122 } from "./method122.js";

/**
 * Filters the results to only include transactions that were processed using the specified payment
 * method. This parameter also accepts `null` to include transactions that have a null for this
 * field.
 */
export type Method1211 = Method122[];

export const method1211Schema: Schema<Method1211> = s.of<Method1211>(
  s.union([s.array(s.lazy(() => method122Schema))]),
);
