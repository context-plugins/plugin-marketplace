import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people, web.
 * Omit for the subscription's full set.
 */
export type Checks2 = string;

export const checks2Schema: Schema<Checks2> = s.of<Checks2>(s.union([s.string()]));
