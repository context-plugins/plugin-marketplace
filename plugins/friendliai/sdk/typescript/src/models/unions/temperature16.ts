import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Sampling temperature. Lower values make outputs more deterministic; higher values increase
 * diversity.
 */
export type Temperature16 = number;

export const temperature16Schema: Schema<Temperature16> = s.of<Temperature16>(s.union([s.float64()]));
