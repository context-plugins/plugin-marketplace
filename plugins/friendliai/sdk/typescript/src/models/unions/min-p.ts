import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A scaling factor used to determine the minimum token probability threshold. This threshold is
 * calculated as `min_p` multiplied by the probability of the most likely token. Tokens with
 * probabilities below this scaled threshold are excluded from sampling. Values range from 0.0
 * (inclusive) to 1.0 (inclusive). Higher values result in stricter filtering, while lower values
 * allow for greater diversity. The default value of 0.0 disables filtering, allowing all tokens to
 * be considered for sampling.
 */
export type MinP = number;

export const minPSchema: Schema<MinP> = s.of<MinP>(s.union([s.float64()]));
