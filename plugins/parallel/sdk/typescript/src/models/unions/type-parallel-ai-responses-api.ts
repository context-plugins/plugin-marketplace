import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The content part type. Supported: `input_text`, `output_text`, and `text`. Multimodal types
 * (`input_image`, `input_audio`, `input_file`) are rejected with a 422 error.
 */
export type TypeParallelAiResponsesApi = string;

export const typeParallelAiResponsesApiSchema: Schema<TypeParallelAiResponsesApi> =
  s.of<TypeParallelAiResponsesApi>(s.union([s.string()]));
