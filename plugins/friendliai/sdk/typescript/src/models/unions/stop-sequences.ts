import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Stop strings that terminate generation when matched in output. The matched value is returned in
 * `stop_sequence` when applicable.
 */
export type StopSequences = string[];

export const stopSequencesSchema: Schema<StopSequences> = s.of<StopSequences>(s.union([s.array(s.string())]));
