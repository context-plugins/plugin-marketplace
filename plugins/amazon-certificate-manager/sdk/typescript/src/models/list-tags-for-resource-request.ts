import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTagsForResourceRequest = {
  /** The ARN of the ACM resource for which to list tags. */
  resourceArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTagsForResourceRequestSchema: Schema<ListTagsForResourceRequest> =
  s.object<ListTagsForResourceRequest>(
    {
      resourceArn: s.string(),
      _keysMap: {
        resourceArn: "ResourceArn",
      },
    },
    { additionalProperties: s.json() },
  );
