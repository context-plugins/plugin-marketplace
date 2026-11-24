import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  chatCompletionTokenLogprobSchema,
  type ChatCompletionTokenLogprob,
} from "../chat-completion-token-logprob.js";

export type Content = ChatCompletionTokenLogprob[];

export const contentSchema: Schema<Content> = s.of<Content>(
  s.union([s.array(s.lazy(() => chatCompletionTokenLogprobSchema))]),
);
