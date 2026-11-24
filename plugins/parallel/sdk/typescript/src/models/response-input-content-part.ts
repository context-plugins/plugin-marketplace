import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { textSchema, type Text } from "./unions/text.js";
import {
  typeParallelAiResponsesApiSchema,
  type TypeParallelAiResponsesApi,
} from "./unions/type-parallel-ai-responses-api.js";

/**
 * A single content part of a message, e.g. `{"text": "hi", "type": "input_text"}`. Only text parts
 * are supported; requests containing image, audio, or file parts fail with a 422 error.
 */
export type ResponseInputContentPart = {
  /**
   * The content part type. Supported: `input_text`, `output_text`, and `text`. Multimodal types
   * (`input_image`, `input_audio`, `input_file`) are rejected with a 422 error.
   */
  type?: TypeParallelAiResponsesApi;
  /** The text payload, when the part carries one. */
  text?: Text;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseInputContentPartSchema: Schema<ResponseInputContentPart> =
  s.object<ResponseInputContentPart>(
    {
      type: s.optional(s.lazy(() => typeParallelAiResponsesApiSchema)),
      text: s.optional(s.lazy(() => textSchema)),
    },
    { additionalProperties: s.json() },
  );
