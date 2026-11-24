import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexListTagsForResourceRequest = {
  /** The Amazon Resource Name (ARN) of the resource to get a list of tags for. */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexListTagsForResourceRequestSchema: Schema<ModelsLexListTagsForResourceRequest> =
  s.object<ModelsLexListTagsForResourceRequest>(
    {
      resourceArn: s.string(),
    },
    { additionalProperties: s.json() },
  );
