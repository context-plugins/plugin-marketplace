import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { badWordTokensSchema, type BadWordTokens } from "./unions/bad-word-tokens.js";
import { badWordsSchema, type BadWords } from "./unions/bad-words.js";
import { embeddingToReplaceSchema, type EmbeddingToReplace } from "./unions/embedding-to-replace.js";
import { encoderNoRepeatNgramSchema, type EncoderNoRepeatNgram } from "./unions/encoder-no-repeat-ngram.js";
import {
  encoderRepetitionPenaltySchema,
  type EncoderRepetitionPenalty,
} from "./unions/encoder-repetition-penalty.js";
import { eosTokenSchema, type EosToken } from "./unions/eos-token.js";
import { forcedOutputTokensSchema, type ForcedOutputTokens } from "./unions/forced-output-tokens.js";
import { frequencyPenaltySchema, type FrequencyPenalty } from "./unions/frequency-penalty.js";
import { logprobs1Schema, type Logprobs1 } from "./unions/logprobs1.js";
import { maxTokensSchema, type MaxTokens } from "./unions/max-tokens.js";
import { maxTotalTokensSchema, type MaxTotalTokens } from "./unions/max-total-tokens.js";
import { minPSchema, type MinP } from "./unions/min-p.js";
import { minTokensSchema, type MinTokens } from "./unions/min-tokens.js";
import { minTotalTokensSchema, type MinTotalTokens } from "./unions/min-total-tokens.js";
import { model1Schema, type Model1 } from "./unions/model1.js";
import { nSchema, type N } from "./unions/n.js";
import { noRepeatNgramSchema, type NoRepeatNgram } from "./unions/no-repeat-ngram.js";
import { presencePenaltySchema, type PresencePenalty } from "./unions/presence-penalty.js";
import { repetitionPenaltySchema, type RepetitionPenalty } from "./unions/repetition-penalty.js";
import { responseFormat1ModelSchema, type ResponseFormat1Model } from "./unions/response-format1-model.js";
import { seedSchema, type Seed } from "./unions/seed.js";
import { stopTokensSchema, type StopTokens } from "./unions/stop-tokens.js";
import { stopSchema, type Stop } from "./unions/stop.js";
import { streamOptions1Schema, type StreamOptions1 } from "./unions/stream-options1.js";
import { temperatureSchema, type Temperature } from "./unions/temperature.js";
import { tokenIndexToReplaceSchema, type TokenIndexToReplace } from "./unions/token-index-to-replace.js";
import { topKSchema, type TopK } from "./unions/top-k.js";
import { topPSchema, type TopP } from "./unions/top-p.js";
import { xtcProbabilitySchema, type XtcProbability } from "./unions/xtc-probability.js";
import { xtcThresholdSchema, type XtcThreshold } from "./unions/xtc-threshold.js";

export type CompletionsStreamBodyWithTokens = {
  /** Routes the request to a specific adapter. */
  model?: Model1;
  /**
   * Same as the above `bad_words` field, but receives token sequences instead of text phrases. This
   * is similar to Hugging Face's
   * [`bad_word_ids`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.bad_words_ids)
   * argument.
   */
  badWordTokens?: BadWordTokens;
  /**
   * Text phrases that should not be generated. For a bad word phrase that contains N tokens, if the
   * first N-1 tokens appears at the last of the generated result, the logit for the last token of
   * the phrase is set to -inf. Before checking whether a bard word is included in the result, the
   * word is converted into tokens. We recommend using `bad_word_tokens` because it is clearer. For
   * example, after tokenization, phrases "clear" and " clear" can result in different token
   * sequences due to the prepended space character. Defaults to empty list.
   */
  badWords?: BadWords;
  /**
   * A list of flattened embedding vectors used for replacing the tokens at the specified indices
   * provided via `token_index_to_replace`.
   */
  embeddingToReplace?: EmbeddingToReplace;
  /**
   * If this exceeds 1, every ngram of that size occurring in the input token sequence cannot appear
   * in the generated result. 1 means that this mechanism is disabled (i.e., you cannot prevent
   * 1-gram from being generated repeatedly). Only allowed for encoder-decoder models. Defaults to
   * 1. This is similar to Hugging Face's
   * [`encoder_no_repeat_ngram_size`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.encoder_no_repeat_ngram_size)
   * argument.
   */
  encoderNoRepeatNgram?: EncoderNoRepeatNgram;
  /**
   * Penalizes tokens that have already appeared in the input tokens. Should be a positive value.
   * 1.0 means no penalty and is the default. Only allowed for encoder-decoder models. See [Keskar
   * et al., 2019](https://arxiv.org/abs/1909.05858) for more details. This is similar to Hugging
   * Face's
   * [`encoder_repetition_penalty`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.encoder_repetition_penalty)
   * argument.
   */
  encoderRepetitionPenalty?: EncoderRepetitionPenalty;
  /** A list of endpoint sentence tokens. */
  eosToken?: EosToken;
  /**
   * A token sequence that is enforced as a generation output. This option can be used when
   * evaluating the model for the datasets with multi-choice problems (e.g.,
   * [HellaSwag](https://huggingface.co/datasets/hellaswag),
   * [MMLU](https://huggingface.co/datasets/cais/mmlu)). Use this option with `logprobs` to get
   * logprobs for the evaluation.
   */
  forcedOutputTokens?: ForcedOutputTokens;
  /**
   * Number between -2.0 and 2.0. Positive values penalizes tokens that have been sampled, taking
   * into account their frequency in the preceding text. This penalization diminishes the model's
   * tendency to reproduce identical lines verbatim.
   */
  frequencyPenalty?: FrequencyPenalty;
  /**
   * Include the log probabilities on the logprobs most likely output tokens, as well the chosen
   * tokens.
   */
  logprobs?: Logprobs1;
  /**
   * The maximum number of tokens to generate. For decoder-only models like GPT, the length of your
   * input tokens plus `max_tokens` should not exceed the model's maximum length (e.g., 2048 for
   * OpenAI GPT-3). For encoder-decoder models like T5 or BlenderBot, `max_tokens` should not exceed
   * the model's maximum output length. This is similar to Hugging Face's
   * [`max_new_tokens`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.max_new_tokens)
   * argument.
   */
  maxTokens?: MaxTokens;
  /**
   * The maximum number of tokens including both the generated result and the input tokens. Only
   * allowed for decoder-only models. Only one argument between `max_tokens` and `max_total_tokens`
   * is allowed. Default value is the model's maximum length. This is similar to Hugging Face's
   * [`max_length`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.max_length)
   * argument.
   */
  maxTotalTokens?: MaxTotalTokens;
  /**
   * A scaling factor used to determine the minimum token probability threshold. This threshold is
   * calculated as `min_p` multiplied by the probability of the most likely token. Tokens with
   * probabilities below this scaled threshold are excluded from sampling. Values range from 0.0
   * (inclusive) to 1.0 (inclusive). Higher values result in stricter filtering, while lower values
   * allow for greater diversity. The default value of 0.0 disables filtering, allowing all tokens
   * to be considered for sampling.
   */
  minP?: MinP;
  /**
   * The minimum number of tokens to generate. Default value is 0. This is similar to Hugging Face's
   * [`min_new_tokens`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.generationconfig.min_new_tokens)
   * argument.
   *
   * **This field is unsupported when `response_format` is specified.**
   */
  minTokens?: MinTokens;
  /**
   * The minimum number of tokens including both the generated result and the input tokens. Only
   * allowed for decoder-only models. Only one argument between `min_tokens` and `min_total_tokens`
   * is allowed. This is similar to Hugging Face's
   * [`min_length`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.min_length)
   * argument.
   */
  minTotalTokens?: MinTotalTokens;
  /**
   * The number of independently generated results for the prompt. Defaults to 1. This is similar to
   * Hugging Face's
   * [`num_return_sequences`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.num_return_sequences)
   * argument.
   */
  n?: N;
  /**
   * If this exceeds 1, every ngram of that size can only occur once among the generated result
   * (plus the input tokens for decoder-only models). 1 means that this mechanism is disabled (i.e.,
   * you cannot prevent 1-gram from being generated repeatedly). Defaults to 1. This is similar to
   * Hugging Face's
   * [`no_repeat_ngram_size`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.no_repeat_ngram_size)
   * argument.
   */
  noRepeatNgram?: NoRepeatNgram;
  /**
   * Number between -2.0 and 2.0. Positive values penalizes tokens that have been sampled at least
   * once in the existing text.
   */
  presencePenalty?: PresencePenalty;
  /**
   * Penalizes tokens that have already appeared in the generated result (plus the input tokens for
   * decoder-only models). Should be a positive value (1.0 means no penalty and is the default). See
   * [Keskar et al., 2019](https://arxiv.org/abs/1909.05858) for more details. This is similar to
   * Hugging Face's
   * [`repetition_penalty`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.generationconfig.repetition_penalty)
   * argument.
   */
  repetitionPenalty?: RepetitionPenalty;
  responseFormat?: ResponseFormat1Model;
  /**
   * Seed to control random procedure. If nothing is given, the API generate the seed randomly, use
   * it for sampling, and return the seed along with the generated result. When using the `n`
   * argument, you can pass a list of seed values to control all of the independent generations.
   */
  seed?: Seed;
  /**
   * When one of the stop phrases appears in the generation result, the API will stop generation.
   * The stop phrases are excluded from the result. Defaults to empty list.
   */
  stop?: Stop;
  /**
   * Stop generating further tokens when generated token corresponds to any of the tokens in the
   * sequence.
   */
  stopTokens?: StopTokens;
  /**
   * Whether to stream the generation result. When set to `true`, each token is sent as [server-sent
   * events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#event_stream_format)
   * once generated.
   *
   * @default true
   */
  stream?: boolean;
  /** Options related to stream. It can only be used when `stream: true`. */
  streamOptions?: StreamOptions1;
  /**
   * Sampling temperature. Smaller temperature makes the generation result closer to greedy, argmax
   * (i.e., `top_k = 1`) sampling. Defaults to 1.0. This is similar to Hugging Face's
   * [`temperature`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.generationconfig.temperature)
   * argument.
   */
  temperature?: Temperature;
  /**
   * A list of token indices where to replace the embeddings of input tokens provided via either
   * `tokens` or `prompt`.
   */
  tokenIndexToReplace?: TokenIndexToReplace;
  /**
   * Limits sampling to the top k tokens with the highest probabilities. Values range from 0 (no
   * filtering) to the model's vocabulary size (inclusive). The default value of 0 applies no
   * filtering, allowing all tokens.
   */
  topK?: TopK;
  /**
   * Keeps only the smallest set of tokens whose cumulative probabilities reach `top_p` or higher.
   * Values range from 0.0 to 1.0 (inclusive). The default value of 1.0 includes all tokens,
   * allowing maximum diversity.
   */
  topP?: TopP;
  /**
   * A probability threshold used to identify “top choice” tokens for exclusion in XTC (Exclude Top
   * Choices) sampling. Tokens with probabilities at or above this threshold are considered viable
   * candidates, and all but the least likely viable token are excluded from sampling. This option
   * reduces the dominance of highly probable tokens while preserving some diversity by keeping the
   * least confident “top choice.” Values range from 0.0 (inclusive) to 1.0 (inclusive). Higher
   * values make the filtering more selective by requiring higher probabilities to trigger
   * exclusion, while lower values apply filtering more broadly. The default value of 0.0 disables
   * XTC filtering entirely.
   */
  xtcThreshold?: XtcThreshold;
  /**
   * The probability that XTC (Exclude Top Choices) filtering will be applied for each sampling
   * decision. When XTC is triggered, high-probability tokens above the `xtc_threshold` are excluded
   * except for the least likely viable token. This stochastic activation allows for a balance
   * between standard sampling and creativity-boosting exclusion filtering. Values range from 0.0
   * (inclusive) to 1.0 (inclusive), where 0.0 means XTC is never applied, 1.0 means XTC is always
   * applied when viable tokens exist, and intermediate values provide probabilistic activation. The
   * default value of 0.0 disables XTC filtering.
   */
  xtcProbability?: XtcProbability;
  /** The tokenized prompt (i.e., input tokens). Either `prompt` or `tokens` field is required. */
  tokens: number[];
};

export const completionsStreamBodyWithTokensSchema: Schema<CompletionsStreamBodyWithTokens> =
  s.object<CompletionsStreamBodyWithTokens>({
    model: s.optional(s.lazy(() => model1Schema)),
    badWordTokens: s.optional(s.lazy(() => badWordTokensSchema)),
    badWords: s.optional(s.lazy(() => badWordsSchema)),
    embeddingToReplace: s.optional(s.lazy(() => embeddingToReplaceSchema)),
    encoderNoRepeatNgram: s.optional(s.lazy(() => encoderNoRepeatNgramSchema)),
    encoderRepetitionPenalty: s.optional(s.lazy(() => encoderRepetitionPenaltySchema)),
    eosToken: s.optional(s.lazy(() => eosTokenSchema)),
    forcedOutputTokens: s.optional(s.lazy(() => forcedOutputTokensSchema)),
    frequencyPenalty: s.optional(s.lazy(() => frequencyPenaltySchema)),
    logprobs: s.optional(s.lazy(() => logprobs1Schema)),
    maxTokens: s.optional(s.lazy(() => maxTokensSchema)),
    maxTotalTokens: s.optional(s.lazy(() => maxTotalTokensSchema)),
    minP: s.optional(s.lazy(() => minPSchema)),
    minTokens: s.optional(s.lazy(() => minTokensSchema)),
    minTotalTokens: s.optional(s.lazy(() => minTotalTokensSchema)),
    n: s.optional(s.lazy(() => nSchema)),
    noRepeatNgram: s.optional(s.lazy(() => noRepeatNgramSchema)),
    presencePenalty: s.optional(s.lazy(() => presencePenaltySchema)),
    repetitionPenalty: s.optional(s.lazy(() => repetitionPenaltySchema)),
    responseFormat: s.optional(s.lazy(() => responseFormat1ModelSchema)),
    seed: s.optional(s.lazy(() => seedSchema)),
    stop: s.optional(s.lazy(() => stopSchema)),
    stopTokens: s.optional(s.lazy(() => stopTokensSchema)),
    stream: s.defaulted(s.boolean(), true),
    streamOptions: s.optional(s.lazy(() => streamOptions1Schema)),
    temperature: s.optional(s.lazy(() => temperatureSchema)),
    tokenIndexToReplace: s.optional(s.lazy(() => tokenIndexToReplaceSchema)),
    topK: s.optional(s.lazy(() => topKSchema)),
    topP: s.optional(s.lazy(() => topPSchema)),
    xtcThreshold: s.optional(s.lazy(() => xtcThresholdSchema)),
    xtcProbability: s.optional(s.lazy(() => xtcProbabilitySchema)),
    tokens: s.array(s.int()),
    _keysMap: {
      badWordTokens: "bad_word_tokens",
      badWords: "bad_words",
      embeddingToReplace: "embedding_to_replace",
      encoderNoRepeatNgram: "encoder_no_repeat_ngram",
      encoderRepetitionPenalty: "encoder_repetition_penalty",
      eosToken: "eos_token",
      forcedOutputTokens: "forced_output_tokens",
      frequencyPenalty: "frequency_penalty",
      maxTokens: "max_tokens",
      maxTotalTokens: "max_total_tokens",
      minP: "min_p",
      minTokens: "min_tokens",
      minTotalTokens: "min_total_tokens",
      noRepeatNgram: "no_repeat_ngram",
      presencePenalty: "presence_penalty",
      repetitionPenalty: "repetition_penalty",
      responseFormat: "response_format",
      stopTokens: "stop_tokens",
      streamOptions: "stream_options",
      tokenIndexToReplace: "token_index_to_replace",
      topK: "top_k",
      topP: "top_p",
      xtcThreshold: "xtc_threshold",
      xtcProbability: "xtc_probability",
    },
  });
