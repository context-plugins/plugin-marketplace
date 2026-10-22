import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Matched stop sequence when `stop_reason=stop_sequence`. */
export type StopSequence1 = string;

export const stopSequence1Schema: Schema<StopSequence1> = s.of<StopSequence1>(s.union([s.string()]));
