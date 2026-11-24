import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { background1Schema, type Background1 } from "./unions/background1.js";
import {
  input1ParallelAiResponsesApiSchema,
  type Input1ParallelAiResponsesApi,
} from "./unions/input1-parallel-ai-responses-api.js";
import { instructions1Schema, type Instructions1 } from "./unions/instructions1.js";
import {
  metadata1ParallelAiResponsesApiInternalSchema,
  metadata1ParallelAiResponsesApiSchema,
  type Metadata1ParallelAiResponsesApi,
} from "./unions/metadata1-parallel-ai-responses-api.js";
import { previousResponseId1Schema, type PreviousResponseId1 } from "./unions/previous-response-id1.js";
import { reasoning1Schema, type Reasoning1 } from "./unions/reasoning1.js";
import { streamSchema, type Stream } from "./unions/stream.js";
import { text2Schema, type Text2 } from "./unions/text2.js";

/**
 * Request body for the Responses API (`POST /v1/responses`).
 *
 * OpenAI-Responses-compatible: point a standard OpenAI client at `https://api.parallel.ai/v1` with
 * your Parallel API key and set `model` to `parallel`. The fields below are the ones Parallel acts
 * on; other OpenAI request fields (`tools`, `tool_choice`, `temperature`, `top_p`,
 * `max_output_tokens`, `parallel_tool_calls`, `truncation`, `store`, `user`, `include`) are
 * accepted for compatibility but have no effect.
 */
export type ResponseCreateRequest = {
  /**
   * The model to run. `parallel` is the only supported value (matched case-insensitively); any
   * other value is rejected. To trade response time for answer quality, set `reasoning.effort`
   * (low/medium/high) rather than changing the model name.
   */
  model: string;
  /**
   * The input to generate a response for: a plain string, or a list of role/content messages that
   * includes at least one `user` message. Must be non-empty, and only text content is supported.
   * `input` and `instructions` together may total at most 20,000 characters.
   */
  input: Input1ParallelAiResponsesApi;
  /** System instructions for the model. */
  instructions?: Instructions1;
  /** ID of a previous response to use as conversation context. */
  previousResponseId?: PreviousResponseId1;
  /** Whether to stream the response. */
  stream?: Stream;
  /** Configuration for text output, including structured output. */
  text?: Text2;
  /**
   * Arbitrary key-value pairs, echoed back on the Response object. Useful for tagging requests. At
   * most 16 keys; keys up to 64 characters, values up to 512 characters.
   */
  metadata?: Metadata1ParallelAiResponsesApi;
  /**
   * Reasoning configuration. `effort` (low/medium/high) controls how much research is performed;
   * defaults to `medium`.
   */
  reasoning?: Reasoning1;
  /**
   * Background mode is not supported: requests with `background=true` are rejected with a 422
   * validation error. Use the Task API (POST /v1/tasks/runs) for long-running work.
   */
  background?: Background1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const responseCreateRequestProperties: s.Shape<ResponseCreateRequest> = {
  model: s.string(),
  input: input1ParallelAiResponsesApiSchema,
  instructions: s.optional(s.lazy(() => instructions1Schema)),
  previousResponseId: s.optional(s.lazy(() => previousResponseId1Schema)),
  stream: s.optional(s.lazy(() => streamSchema)),
  text: s.optional(s.lazy(() => text2Schema)),
  metadata: s.optional(s.lazy(() => metadata1ParallelAiResponsesApiInternalSchema)),
  reasoning: s.optional(s.lazy(() => reasoning1Schema)),
  background: s.optional(s.lazy(() => background1Schema)),
  _keysMap: {
    previousResponseId: "previous_response_id",
  },
};

export const responseCreateRequestInternalSchema: Schema<ResponseCreateRequest> =
  s.object<ResponseCreateRequest>(responseCreateRequestProperties, { additionalProperties: s.json() });

export const responseCreateRequestSchema: Schema<ResponseCreateRequest> = s.lazySchema(() =>
  s.object<ResponseCreateRequest>(
    {
      ...responseCreateRequestProperties,
      metadata: s.optional(s.lazy(() => metadata1ParallelAiResponsesApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
