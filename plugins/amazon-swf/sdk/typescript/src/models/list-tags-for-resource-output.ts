import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceTagSchema, type ResourceTag } from "./resource-tag.js";

export type ListTagsForResourceOutput = {
  /** An array of tags associated with the domain. */
  tags?: ResourceTag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceOutputSchema: Schema<ListTagsForResourceOutput> =
  s.object<ListTagsForResourceOutput>(
    {
      tags: s.optional(s.array(s.lazy(() => resourceTagSchema))),
    },
    { additionalProperties: s.json() },
  );
