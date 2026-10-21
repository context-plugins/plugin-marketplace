import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The value above which a sample is considered unhealthy. */
export type AlertGt = number | string;

export const alertGtSchema: Schema<AlertGt> = s.of<AlertGt>(s.union([s.int(), s.float64(), s.string()]));
