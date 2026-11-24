import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { completionTokensSchema, type CompletionTokens } from "./unions/completion-tokens.js";
import { durationMsSchema, type DurationMs } from "./unions/duration-ms.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import { promptTokensSchema, type PromptTokens } from "./unions/prompt-tokens.js";
import { totalTokensSchema, type TotalTokens } from "./unions/total-tokens.js";
import { traceIdSchema, type TraceId } from "./unions/trace-id.js";

/** One gateway call against this model, scoped to the caller's team. */
export type ModelInferenceLogEntry = {
  id: string;
  createdAt: Date;
  route: string;
  status: string;
  errorCode?: ErrorCode;
  /** @default false */
  streaming?: boolean;
  promptTokens?: PromptTokens;
  completionTokens?: CompletionTokens;
  totalTokens?: TotalTokens;
  /** @default 0 */
  cost?: number;
  durationMs?: DurationMs;
  traceId?: TraceId;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelInferenceLogEntrySchema: Schema<ModelInferenceLogEntry> = s.object<ModelInferenceLogEntry>(
  {
    id: s.string(),
    createdAt: s.dateTime(),
    route: s.string(),
    status: s.string(),
    errorCode: s.optional(s.lazy(() => errorCodeSchema)),
    streaming: s.defaulted(s.boolean(), false),
    promptTokens: s.optional(s.lazy(() => promptTokensSchema)),
    completionTokens: s.optional(s.lazy(() => completionTokensSchema)),
    totalTokens: s.optional(s.lazy(() => totalTokensSchema)),
    cost: s.defaulted(s.float64(), 0),
    durationMs: s.optional(s.lazy(() => durationMsSchema)),
    traceId: s.optional(s.lazy(() => traceIdSchema)),
    _keysMap: {
      createdAt: "created_at",
      errorCode: "error_code",
      promptTokens: "prompt_tokens",
      completionTokens: "completion_tokens",
      totalTokens: "total_tokens",
      durationMs: "duration_ms",
      traceId: "trace_id",
    },
  },
  { additionalProperties: s.json() },
);
