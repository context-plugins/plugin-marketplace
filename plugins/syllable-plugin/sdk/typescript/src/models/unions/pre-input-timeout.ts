import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Pre input silence threshold */
export type PreInputTimeout = number;

export const preInputTimeoutSchema: Schema<PreInputTimeout> = s.of<PreInputTimeout>(s.union([s.float64()]));
