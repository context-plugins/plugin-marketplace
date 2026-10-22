import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { streamedCompletionDataSchema, type StreamedCompletionData } from "./streamed-completion-data.js";

export type StreamedCompletionsResult = {
  data: StreamedCompletionData;
};

export const streamedCompletionsResultSchema: Schema<StreamedCompletionsResult> =
  s.object<StreamedCompletionsResult>({
    data: streamedCompletionDataSchema,
  });
