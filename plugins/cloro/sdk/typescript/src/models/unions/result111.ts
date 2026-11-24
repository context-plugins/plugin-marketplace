import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chatGptResultInternalSchema, chatGptResultSchema, type ChatGptResult } from "../chat-gpt-result.js";

/**
 * ChatGPT's response data. An array, with one response for each prompt in order, when `prompt` is
 * an array.
 */
export type Result111 = ChatGptResult | ChatGptResult[];

export const result111InternalSchema: Schema<Result111> = s.of<Result111>(
  s.union([s.lazy(() => chatGptResultInternalSchema), s.array(s.lazy(() => chatGptResultInternalSchema))]),
);

export const result111Schema: Schema<Result111> = s.lazySchema(() =>
  s.of<Result111>(s.union([s.lazy(() => chatGptResultSchema), s.array(s.lazy(() => chatGptResultSchema))])),
);
