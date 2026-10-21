import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The call duration in seconds. */
export type Duration2 = number;

export const duration2Schema: Schema<Duration2> = s.of<Duration2>(s.union([s.float64()]));
