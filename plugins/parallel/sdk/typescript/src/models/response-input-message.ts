import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  roleParallelAiResponsesApiSchema,
  type RoleParallelAiResponsesApi,
} from "./role-parallel-ai-responses-api.js";
import {
  contentParallelAiResponsesApiSchema,
  type ContentParallelAiResponsesApi,
} from "./unions/content-parallel-ai-responses-api.js";

/**
 * A single input message for the Responses API.
 *
 * `content` accepts either a bare string (`"hi"`) or the canonical OpenAI list-of-parts (`[{"text":
 * "hi", "type": "input_text"}]`).
 */
export type ResponseInputMessage = {
  /** The role of the message author. */
  role: RoleParallelAiResponsesApi;
  /**
   * Text content of the message. Either a string or a list of content parts (`{text, type}`
   * objects) for OpenAI SDK clients.
   */
  content: ContentParallelAiResponsesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseInputMessageSchema: Schema<ResponseInputMessage> = s.object<ResponseInputMessage>(
  {
    role: roleParallelAiResponsesApiSchema,
    content: contentParallelAiResponsesApiSchema,
  },
  { additionalProperties: s.json() },
);
