import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { completionsChoiceSchema, type CompletionsChoice } from "./completions-choice.js";
import { textUsageSchema, type TextUsage } from "./text-usage.js";
import { modelSchema, type Model } from "./unions/model.js";

export type CompletionsResult = {
  /** A unique ID of the completion. */
  id: string;
  /** The object type, which is always set to `text_completion`. @default "text_completion" */
  object?: "text_completion";
  usage: TextUsage;
  choices: CompletionsChoice[];
  /** The model to generate the completion. For dedicated endpoints, it returns the endpoint ID. */
  model?: Model;
};

export const completionsResultSchema: Schema<CompletionsResult> = s.object<CompletionsResult>({
  id: s.string(),
  object: s.defaulted(s.literal("text_completion"), "text_completion"),
  usage: textUsageSchema,
  choices: s.array(s.lazy(() => completionsChoiceSchema)),
  model: s.optional(s.lazy(() => modelSchema)),
});
