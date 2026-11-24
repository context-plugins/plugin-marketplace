import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Results of the match condition evaluations for this candidate. This object contains the
 * structured output that determines whether the candidate matches the overall FindAll objective.
 */
export type OutputParallelAiFindAllApi = Record<string, unknown>;

export const outputParallelAiFindAllApiSchema: Schema<OutputParallelAiFindAllApi> =
  s.of<OutputParallelAiFindAllApi>(s.union([s.record(s.string(), s.unknown())]));
