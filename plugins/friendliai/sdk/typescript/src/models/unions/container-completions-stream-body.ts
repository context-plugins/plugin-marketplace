import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  completionsStreamBodyWithPromptSchema,
  type CompletionsStreamBodyWithPrompt,
} from "../completions-stream-body-with-prompt.js";
import {
  completionsStreamBodyWithTokensSchema,
  type CompletionsStreamBodyWithTokens,
} from "../completions-stream-body-with-tokens.js";

export type ContainerCompletionsStreamBody =
  | CompletionsStreamBodyWithPrompt
  | CompletionsStreamBodyWithTokens;

export const containerCompletionsStreamBodySchema: Schema<ContainerCompletionsStreamBody> =
  s.of<ContainerCompletionsStreamBody>(
    s.union([
      s.lazy(() => completionsStreamBodyWithPromptSchema),
      s.lazy(() => completionsStreamBodyWithTokensSchema),
    ]),
  );
