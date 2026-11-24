import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item2BundleSocialCommentApiSchema,
  type Item2BundleSocialCommentApi,
} from "./item2-bundle-social-comment-api.js";

export type ApiV1CommentResponse3 = {
  items: Item2BundleSocialCommentApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CommentResponse3Schema: Schema<ApiV1CommentResponse3> = s.object<ApiV1CommentResponse3>(
  {
    items: s.array(s.lazy(() => item2BundleSocialCommentApiSchema)),
    total: s.float64(),
  },
  { additionalProperties: s.json() },
);
