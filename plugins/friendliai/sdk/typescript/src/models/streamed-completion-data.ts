import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  streamedCompletionsChoiceSchema,
  type StreamedCompletionsChoice,
} from "./streamed-completions-choice.js";
import { modelSchema, type Model } from "./unions/model.js";
import { usage1Schema, type Usage1 } from "./unions/usage1.js";

export type StreamedCompletionData = {
  /** A unique ID of the completion. */
  id: string;
  choices: StreamedCompletionsChoice[];
  usage?: Usage1;
  /** The object type, which is always set to `text_completion`. @default "text_completion" */
  object?: "text_completion";
  /** The Unix timestamp (in seconds) for when the token is sampled. */
  created: number;
  /** The model to generate the completion. For dedicated endpoints, it returns the endpoint ID. */
  model?: Model;
};

export const streamedCompletionDataSchema: Schema<StreamedCompletionData> = s.object<StreamedCompletionData>({
  id: s.string(),
  choices: s.array(s.lazy(() => streamedCompletionsChoiceSchema)),
  usage: s.optional(s.lazy(() => usage1Schema)),
  object: s.defaulted(s.literal("text_completion"), "text_completion"),
  created: s.int(),
  model: s.optional(s.lazy(() => modelSchema)),
});
