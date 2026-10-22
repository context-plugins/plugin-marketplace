import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The probability that XTC (Exclude Top Choices) filtering will be applied for each sampling
 * decision. When XTC is triggered, high-probability tokens above the `xtc_threshold` are excluded
 * except for the least likely viable token. This stochastic activation allows for a balance between
 * standard sampling and creativity-boosting exclusion filtering. Values range from 0.0 (inclusive)
 * to 1.0 (inclusive), where 0.0 means XTC is never applied, 1.0 means XTC is always applied when
 * viable tokens exist, and intermediate values provide probabilistic activation. The default value
 * of 0.0 disables XTC filtering.
 */
export type XtcProbability = number;

export const xtcProbabilitySchema: Schema<XtcProbability> = s.of<XtcProbability>(s.union([s.float64()]));
