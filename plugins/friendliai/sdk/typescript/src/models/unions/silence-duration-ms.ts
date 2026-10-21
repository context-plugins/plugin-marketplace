import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Duration of silence to detect speech stop (in milliseconds). With shorter values the model will
 * respond more quickly, but may jump in on short pauses from the user.
 */
export type SilenceDurationMs = number;

export const silenceDurationMsSchema: Schema<SilenceDurationMs> = s.of<SilenceDurationMs>(s.union([s.int()]));
