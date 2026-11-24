import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Subset of: compliance, filings, grants, gov, people, web. Default all. */
export type Checks1 = string[];

export const checks1Schema: Schema<Checks1> = s.of<Checks1>(s.union([s.array(s.string())]));
