import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  completionsStreamServerlessBodyWithPromptSchema,
  type CompletionsStreamServerlessBodyWithPrompt,
} from "../completions-stream-serverless-body-with-prompt.js";
import {
  completionsStreamServerlessBodyWithTokensSchema,
  type CompletionsStreamServerlessBodyWithTokens,
} from "../completions-stream-serverless-body-with-tokens.js";

export type ServerlessCompletionsStreamBody =
  | CompletionsStreamServerlessBodyWithPrompt
  | CompletionsStreamServerlessBodyWithTokens;

export const serverlessCompletionsStreamBodySchema: Schema<ServerlessCompletionsStreamBody> =
  s.of<ServerlessCompletionsStreamBody>(
    s.union([
      s.lazy(() => completionsStreamServerlessBodyWithPromptSchema),
      s.lazy(() => completionsStreamServerlessBodyWithTokensSchema),
    ]),
  );
