import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postsPreviewDataSchema, type PostsPreviewData } from "./posts-preview-data.js";

export type PostsPreviewResponse = {
  data: PostsPreviewData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postsPreviewResponseSchema: Schema<PostsPreviewResponse> = s.object<PostsPreviewResponse>(
  {
    data: postsPreviewDataSchema,
  },
  { additionalProperties: s.json() },
);
