import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Frequency of the monitor. Format: '<number><unit>' where unit is 'h' (hours), 'd' (days), or 'w'
 * (weeks). Must be between 1h and 30d (inclusive).
 */
export type Frequency = string;

export const frequencySchema: Schema<Frequency> = s.of<Frequency>(s.union([s.string()]));
