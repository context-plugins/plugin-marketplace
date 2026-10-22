import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * 0-based index of the transcript turn. Transcript events carry their own turn index; tool/latency
 * events carry the index of the nearest preceding turn they bind to. None only for non-transcript
 * events that precede the first transcript turn.
 */
export type TurnIndex = number;

export const turnIndexSchema: Schema<TurnIndex> = s.of<TurnIndex>(s.union([s.int()]));
