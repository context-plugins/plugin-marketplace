import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Total number of uniquely opened emails. Only counts the first open for each subscriber. */
export type TotalUniqueOpens = number | boolean;

export const totalUniqueOpensSchema: Schema<TotalUniqueOpens> = s.of<TotalUniqueOpens>(
  s.union([s.int(), s.boolean()]),
);
