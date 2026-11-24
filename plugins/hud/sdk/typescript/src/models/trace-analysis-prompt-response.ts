import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A size-bounded debugging prompt for a trace, ready to paste into a coding agent. */
export type TraceAnalysisPromptResponse = {
  traceId: string;
  prompt: string;
  truncated: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceAnalysisPromptResponseSchema: Schema<TraceAnalysisPromptResponse> =
  s.object<TraceAnalysisPromptResponse>(
    {
      traceId: s.string(),
      prompt: s.string(),
      truncated: s.boolean(),
      _keysMap: {
        traceId: "trace_id",
      },
    },
    { additionalProperties: s.json() },
  );
