import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompletionResponse = {
  content: string;
  model: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const completionResponseSchema: Schema<CompletionResponse> = s.object<CompletionResponse>(
  {
    content: s.string(),
    model: s.string(),
  },
  { additionalProperties: s.json() },
);
