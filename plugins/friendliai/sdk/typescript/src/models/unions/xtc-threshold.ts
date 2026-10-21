import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A probability threshold used to identify “top choice” tokens for exclusion in XTC (Exclude Top
 * Choices) sampling. Tokens with probabilities at or above this threshold are considered viable
 * candidates, and all but the least likely viable token are excluded from sampling. This option
 * reduces the dominance of highly probable tokens while preserving some diversity by keeping the
 * least confident “top choice.” Values range from 0.0 (inclusive) to 1.0 (inclusive). Higher values
 * make the filtering more selective by requiring higher probabilities to trigger exclusion, while
 * lower values apply filtering more broadly. The default value of 0.0 disables XTC filtering
 * entirely.
 */
export type XtcThreshold = number;

export const xtcThresholdSchema: Schema<XtcThreshold> = s.of<XtcThreshold>(s.union([s.float64()]));
