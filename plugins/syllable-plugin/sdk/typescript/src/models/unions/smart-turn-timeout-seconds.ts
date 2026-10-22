import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Seconds of caller silence before injecting the first bridge phrase. Subsequent sleep intervals
 * are 2x, 3x, 4x this base. When unset, the service-wide default applies.
 */
export type SmartTurnTimeoutSeconds = number;

export const smartTurnTimeoutSecondsSchema: Schema<SmartTurnTimeoutSeconds> = s.of<SmartTurnTimeoutSeconds>(
  s.union([s.float64()]),
);
