import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A token sequence that is enforced as a generation output. This option can be used when evaluating
 * the model for the datasets with multi-choice problems (e.g.,
 * [HellaSwag](https://huggingface.co/datasets/hellaswag),
 * [MMLU](https://huggingface.co/datasets/cais/mmlu)). Use this option with `logprobs` to get
 * logprobs for the evaluation.
 */
export type ForcedOutputTokens = number[];

export const forcedOutputTokensSchema: Schema<ForcedOutputTokens> = s.of<ForcedOutputTokens>(
  s.union([s.array(s.int())]),
);
