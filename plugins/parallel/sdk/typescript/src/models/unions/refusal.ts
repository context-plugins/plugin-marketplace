import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  chatCompletionTokenLogprobSchema,
  type ChatCompletionTokenLogprob,
} from "../chat-completion-token-logprob.js";

export type Refusal = ChatCompletionTokenLogprob[];

export const refusalSchema: Schema<Refusal> = s.of<Refusal>(
  s.union([s.array(s.lazy(() => chatCompletionTokenLogprobSchema))]),
);
