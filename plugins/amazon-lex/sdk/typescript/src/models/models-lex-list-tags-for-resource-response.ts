import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ModelsLexListTagsForResourceResponse = {
  /** The tags associated with a resource. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexListTagsForResourceResponseSchema: Schema<ModelsLexListTagsForResourceResponse> =
  s.object<ModelsLexListTagsForResourceResponse>(
    {
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
    },
    { additionalProperties: s.json() },
  );
