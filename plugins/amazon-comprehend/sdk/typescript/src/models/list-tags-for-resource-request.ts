import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListTagsForResourceRequest = {
  /** The Amazon Resource Name (ARN) of the given Amazon Comprehend resource you are querying. */
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
