import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceTagSchema, type ResourceTag } from "./resource-tag.js";

export type DescribeTagsResponse = {
  /** Information about the tags. */
  resourceTags?: ResourceTag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTagsResponseSchema: Schema<DescribeTagsResponse> = s.object<DescribeTagsResponse>(
  {
    resourceTags: s.optional(s.array(s.lazy(() => resourceTagSchema))),
  },
  { additionalProperties: s.json() },
);
