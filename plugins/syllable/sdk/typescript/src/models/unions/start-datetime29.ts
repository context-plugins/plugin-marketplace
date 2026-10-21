import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Start datetime for filtering results */
export type StartDatetime29 = string;

export const startDatetime29Schema: Schema<StartDatetime29> = s.of<StartDatetime29>(s.union([s.string()]));
