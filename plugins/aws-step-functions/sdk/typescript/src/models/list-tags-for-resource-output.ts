import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type ListTagsForResourceOutput = {
  /** An array of tags associated with the resource. */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceOutputSchema: Schema<ListTagsForResourceOutput> =
  s.object<ListTagsForResourceOutput>(
    {
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
    },
    { additionalProperties: s.json() },
  );
