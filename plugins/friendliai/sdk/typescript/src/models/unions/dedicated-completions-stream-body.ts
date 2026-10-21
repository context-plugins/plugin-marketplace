import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  completionsStreamDedicatedBodyWithPromptSchema,
  type CompletionsStreamDedicatedBodyWithPrompt,
} from "../completions-stream-dedicated-body-with-prompt.js";
import {
  completionsStreamDedicatedBodyWithTokensSchema,
  type CompletionsStreamDedicatedBodyWithTokens,
} from "../completions-stream-dedicated-body-with-tokens.js";

export type DedicatedCompletionsStreamBody =
  | CompletionsStreamDedicatedBodyWithPrompt
  | CompletionsStreamDedicatedBodyWithTokens;

export const dedicatedCompletionsStreamBodySchema: Schema<DedicatedCompletionsStreamBody> =
  s.of<DedicatedCompletionsStreamBody>(
    s.union([
      s.lazy(() => completionsStreamDedicatedBodyWithPromptSchema),
      s.lazy(() => completionsStreamDedicatedBodyWithTokensSchema),
    ]),
  );
