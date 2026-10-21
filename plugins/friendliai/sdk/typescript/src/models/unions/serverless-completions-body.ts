import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  completionsServerlessBodyWithPromptSchema,
  type CompletionsServerlessBodyWithPrompt,
} from "../completions-serverless-body-with-prompt.js";
import {
  completionsServerlessBodyWithTokensSchema,
  type CompletionsServerlessBodyWithTokens,
} from "../completions-serverless-body-with-tokens.js";

export type ServerlessCompletionsBody =
  | CompletionsServerlessBodyWithPrompt
  | CompletionsServerlessBodyWithTokens;

export const serverlessCompletionsBodySchema: Schema<ServerlessCompletionsBody> =
  s.of<ServerlessCompletionsBody>(
    s.union([
      s.lazy(() => completionsServerlessBodyWithPromptSchema),
      s.lazy(() => completionsServerlessBodyWithTokensSchema),
    ]),
  );
