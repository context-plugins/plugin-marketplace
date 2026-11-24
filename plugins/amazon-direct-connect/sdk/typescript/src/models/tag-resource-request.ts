import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type TagResourceRequest = {
  /** The Amazon Resource Name (ARN) of the resource. */
  resourceArn: string;
  /** The tags to add. */
  tags: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagResourceRequestSchema: Schema<TagResourceRequest> = s.object<TagResourceRequest>(
  {
    resourceArn: s.string(),
    tags: s.array(s.lazy(() => tagSchema)),
  },
  { additionalProperties: s.json() },
);
