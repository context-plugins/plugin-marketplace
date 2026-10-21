import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * ID of the agent experiment that was running on the channel target when the session started. Null
 * when no experiment was running, which is the usual case.
 */
export type ExperimentId = string;

export const experimentIdSchema: Schema<ExperimentId> = s.of<ExperimentId>(s.union([s.string()]));
