import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LlmDiagnosticsV4 = {
  completionTokens?: number;
  failedRowsCount?: number;
  failedRowsDataQuery?: string;
  failedRowsKeysQuery?: string;
  failedRowsSourceQuery?: string;
  model?: string;
  promptTokens?: number;
  rowsChecked?: number;
  rowsFailed?: number;
  rowsFailedPercent?: number;
  tokensSpent?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const llmDiagnosticsV4Schema: Schema<LlmDiagnosticsV4> = s.object<LlmDiagnosticsV4>(
  {
    completionTokens: s.optional(s.int()),
    failedRowsCount: s.optional(s.int()),
    failedRowsDataQuery: s.optional(s.string()),
    failedRowsKeysQuery: s.optional(s.string()),
    failedRowsSourceQuery: s.optional(s.string()),
    model: s.optional(s.string()),
    promptTokens: s.optional(s.int()),
    rowsChecked: s.optional(s.int()),
    rowsFailed: s.optional(s.int()),
    rowsFailedPercent: s.optional(s.float64()),
    tokensSpent: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
