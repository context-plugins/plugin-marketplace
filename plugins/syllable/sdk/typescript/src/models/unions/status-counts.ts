import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Counts of requests by status */
export type StatusCounts = Record<string, number>;

export const statusCountsSchema: Schema<StatusCounts> = s.of<StatusCounts>(
  s.union([s.record(s.string(), s.int())]),
);
