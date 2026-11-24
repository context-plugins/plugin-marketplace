import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acceptedPredictionTokensSchema,
  type AcceptedPredictionTokens,
} from "./unions/accepted-prediction-tokens.js";
import { audioTokensSchema, type AudioTokens } from "./unions/audio-tokens.js";
import { reasoningTokensSchema, type ReasoningTokens } from "./unions/reasoning-tokens.js";
import {
  rejectedPredictionTokensSchema,
  type RejectedPredictionTokens,
} from "./unions/rejected-prediction-tokens.js";

/** Breakdown of tokens used in a completion. */
export type CompletionTokensDetails = {
  acceptedPredictionTokens?: AcceptedPredictionTokens;
  audioTokens?: AudioTokens;
  reasoningTokens?: ReasoningTokens;
  rejectedPredictionTokens?: RejectedPredictionTokens;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const completionTokensDetailsSchema: Schema<CompletionTokensDetails> =
  s.object<CompletionTokensDetails>(
    {
      acceptedPredictionTokens: s.optional(s.lazy(() => acceptedPredictionTokensSchema)),
      audioTokens: s.optional(s.lazy(() => audioTokensSchema)),
      reasoningTokens: s.optional(s.lazy(() => reasoningTokensSchema)),
      rejectedPredictionTokens: s.optional(s.lazy(() => rejectedPredictionTokensSchema)),
      _keysMap: {
        acceptedPredictionTokens: "accepted_prediction_tokens",
        audioTokens: "audio_tokens",
        reasoningTokens: "reasoning_tokens",
        rejectedPredictionTokens: "rejected_prediction_tokens",
      },
    },
    { additionalProperties: s.json() },
  );
