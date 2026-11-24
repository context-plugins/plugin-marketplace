import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Max number of candidates to evaluate */
export type MatchLimit = number;

export const matchLimitSchema: Schema<MatchLimit> = s.of<MatchLimit>(s.union([s.int()]));
