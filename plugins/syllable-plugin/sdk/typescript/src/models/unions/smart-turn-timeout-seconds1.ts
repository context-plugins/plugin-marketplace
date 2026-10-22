import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Seconds of caller silence before injecting the first bridge phrase. Defaults to 2.75s when
 * omitted on write.
 */
export type SmartTurnTimeoutSeconds1 = number;

export const smartTurnTimeoutSeconds1Schema: Schema<SmartTurnTimeoutSeconds1> =
  s.of<SmartTurnTimeoutSeconds1>(s.union([s.float64()]));
