import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LlmCallCount = number;

export const llmCallCountInternalSchema: Schema<LlmCallCount> = s.of<LlmCallCount>(s.union([s.int()]));

export const llmCallCountSchema: Schema<LlmCallCount> = s.lazySchema(() =>
  s.of<LlmCallCount>(s.union([s.int().check(s.gte(0))])),
);
