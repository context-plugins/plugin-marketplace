import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Matched stop string when `stop_reason` is `stop_sequence`; otherwise null. */
export type StopSequence2 = string;

export const stopSequence2Schema: Schema<StopSequence2> = s.of<StopSequence2>(s.union([s.string()]));
