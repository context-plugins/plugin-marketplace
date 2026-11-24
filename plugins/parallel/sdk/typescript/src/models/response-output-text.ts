import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { annotationUrlCitationSchema, type AnnotationUrlCitation } from "./annotation-url-citation.js";
import {
  logprobsParallelAiResponsesApiSchema,
  type LogprobsParallelAiResponsesApi,
} from "./unions/logprobs-parallel-ai-responses-api.js";

/**
 * A text content part of an output message. `annotations` carries the URL citations grounding the
 * answer.
 */
export type ResponseOutputText = {
  annotations: AnnotationUrlCitation[];
  text: string;
  /** @default "output_text" */
  type?: "output_text";
  logprobs?: LogprobsParallelAiResponsesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseOutputTextSchema: Schema<ResponseOutputText> = s.object<ResponseOutputText>(
  {
    annotations: s.array(s.lazy(() => annotationUrlCitationSchema)),
    text: s.string(),
    type: s.defaulted(s.literal("output_text"), "output_text"),
    logprobs: s.optional(s.lazy(() => logprobsParallelAiResponsesApiSchema)),
  },
  { additionalProperties: s.json() },
);
