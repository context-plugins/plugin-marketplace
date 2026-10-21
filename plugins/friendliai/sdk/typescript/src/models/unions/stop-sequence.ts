import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Matched stop sequence placeholder at start. */
export type StopSequence = string;

export const stopSequenceSchema: Schema<StopSequence> = s.of<StopSequence>(s.union([s.string()]));
