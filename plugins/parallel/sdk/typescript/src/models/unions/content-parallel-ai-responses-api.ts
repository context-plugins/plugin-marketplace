import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responseInputContentPartSchema,
  type ResponseInputContentPart,
} from "../response-input-content-part.js";

/**
 * Text content of the message. Either a string or a list of content parts (`{text, type}` objects)
 * for OpenAI SDK clients.
 */
export type ContentParallelAiResponsesApi = string | ResponseInputContentPart[];

export const contentParallelAiResponsesApiSchema: Schema<ContentParallelAiResponsesApi> =
  s.of<ContentParallelAiResponsesApi>(
    s.union([s.string(), s.array(s.lazy(() => responseInputContentPartSchema))]),
  );
