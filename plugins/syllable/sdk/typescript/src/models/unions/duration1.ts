import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Duration of the session in seconds */
export type Duration1 = number;

export const duration1Schema: Schema<Duration1> = s.of<Duration1>(s.union([s.float64()]));
