import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  completionsBodyWithPromptSchema,
  type CompletionsBodyWithPrompt,
} from "../completions-body-with-prompt.js";
import {
  completionsBodyWithTokensSchema,
  type CompletionsBodyWithTokens,
} from "../completions-body-with-tokens.js";

export type ContainerCompletionsBody = CompletionsBodyWithPrompt | CompletionsBodyWithTokens;

export const containerCompletionsBodySchema: Schema<ContainerCompletionsBody> =
  s.of<ContainerCompletionsBody>(
    s.union([s.lazy(() => completionsBodyWithPromptSchema), s.lazy(() => completionsBodyWithTokensSchema)]),
  );
