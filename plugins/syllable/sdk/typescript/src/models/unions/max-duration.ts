import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Maximum duration of the calls in seconds */
export type MaxDuration = number;

export const maxDurationSchema: Schema<MaxDuration> = s.of<MaxDuration>(s.union([s.int()]));
