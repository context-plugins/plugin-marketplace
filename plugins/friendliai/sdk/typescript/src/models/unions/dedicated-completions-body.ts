import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  completionsDedicatedBodyWithPromptSchema,
  type CompletionsDedicatedBodyWithPrompt,
} from "../completions-dedicated-body-with-prompt.js";
import {
  completionsDedicatedBodyWithTokensSchema,
  type CompletionsDedicatedBodyWithTokens,
} from "../completions-dedicated-body-with-tokens.js";

export type DedicatedCompletionsBody =
  | CompletionsDedicatedBodyWithPrompt
  | CompletionsDedicatedBodyWithTokens;

export const dedicatedCompletionsBodySchema: Schema<DedicatedCompletionsBody> =
  s.of<DedicatedCompletionsBody>(
    s.union([
      s.lazy(() => completionsDedicatedBodyWithPromptSchema),
      s.lazy(() => completionsDedicatedBodyWithTokensSchema),
    ]),
  );
