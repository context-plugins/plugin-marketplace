import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Metrics = {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
  /**
   * Number of attempted generations
   *
   * @deprecated
   */
  generationCount?: number;
  /** Number of successful generations */
  generationSuccessCount?: number;
  /** Number of generations with errors */
  generationErrorCount?: number;
  thumbsUp?: number;
  thumbsDown?: number;
  durationMs?: number;
  timeToFirstTokenMs?: number;
  /** A value between 0 and 1 representing satisfaction rating */
  satisfactionRating?: number;
  /** Cost of input tokens in USD */
  inputCost?: number;
  /** Cost of output tokens in USD */
  outputCost?: number;
  /** Average accuracy judge score (0.0-1.0) */
  judgeAccuracy?: number;
  /** Average relevance judge score (0.0-1.0) */
  judgeRelevance?: number;
  /** Average toxicity judge score (0.0-1.0) */
  judgeToxicity?: number;
};

export const metricsSchema: Schema<Metrics> = s.object<Metrics>({
  inputTokens: s.optional(s.int()),
  outputTokens: s.optional(s.int()),
  totalTokens: s.optional(s.int()),
  generationCount: s.optional(s.int()),
  generationSuccessCount: s.optional(s.int()),
  generationErrorCount: s.optional(s.int()),
  thumbsUp: s.optional(s.int()),
  thumbsDown: s.optional(s.int()),
  durationMs: s.optional(s.int()),
  timeToFirstTokenMs: s.optional(s.int()),
  satisfactionRating: s.optional(s.float64()),
  inputCost: s.optional(s.float64()),
  outputCost: s.optional(s.float64()),
  judgeAccuracy: s.optional(s.float64()),
  judgeRelevance: s.optional(s.float64()),
  judgeToxicity: s.optional(s.float64()),
});
