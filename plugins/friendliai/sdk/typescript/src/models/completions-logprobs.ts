import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CompletionsLogprobs = {
  /**
   * The starting character position of each token in the generated text, useful for mapping tokens
   * back to their exact location for detailed analysis.
   */
  textOffset: number[];
  /**
   * The log probabilities of each generated token, indicating the model's confidence in selecting
   * each token.
   */
  tokenLogprobs: number[];
  /**
   * A list of individual tokens generated in the completion, representing segments of text such as
   * words or pieces of words.
   */
  tokens: string[];
  /**
   * A list of dictionaries, where each dictionary represents the top alternative tokens considered
   * by the model at a specific position in the generated text, along with their log probabilities.
   * The number of items in each dictionary matches the value of `logprobs`.
   */
  topLogprobs: Record<string, unknown>[];
};

export const completionsLogprobsSchema: Schema<CompletionsLogprobs> = s.object<CompletionsLogprobs>({
  textOffset: s.array(s.int()),
  tokenLogprobs: s.array(s.float64()),
  tokens: s.array(s.string()),
  topLogprobs: s.array(s.record(s.string(), s.unknown())),
  _keysMap: {
    textOffset: "text_offset",
    tokenLogprobs: "token_logprobs",
    topLogprobs: "top_logprobs",
  },
});
