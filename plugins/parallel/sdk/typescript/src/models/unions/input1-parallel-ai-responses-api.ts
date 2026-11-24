import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseInputMessageSchema, type ResponseInputMessage } from "../response-input-message.js";

/**
 * The input to generate a response for: a plain string, or a list of role/content messages that
 * includes at least one `user` message. Must be non-empty, and only text content is supported.
 * `input` and `instructions` together may total at most 20,000 characters.
 */
export type Input1ParallelAiResponsesApi = string | ResponseInputMessage[];

export const input1ParallelAiResponsesApiSchema: Schema<Input1ParallelAiResponsesApi> =
  s.of<Input1ParallelAiResponsesApi>(
    s.union([s.string(), s.array(s.lazy(() => responseInputMessageSchema))]),
  );
