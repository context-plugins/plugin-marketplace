import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Upper bound on the number of results to return. Defaults to 10 if not provided. */
export type MaxResults = number;

export const maxResultsSchema: Schema<MaxResults> = s.of<MaxResults>(s.union([s.int()]));
