import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messagesThinkingConfigSchema, type MessagesThinkingConfig } from "../messages-thinking-config.js";

/**
 * Controls reasoning behavior with mode (`enabled`, `disabled`, `adaptive`). `enabled` requires
 * `budget_tokens`; `disabled` and `adaptive` must not include it.
 */
export type Thinking = MessagesThinkingConfig;

export const thinkingSchema: Schema<Thinking> = s.of<Thinking>(
  s.union([s.lazy(() => messagesThinkingConfigSchema)]),
);
