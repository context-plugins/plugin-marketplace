import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialCommentApiSchema,
  type ItemBundleSocialCommentApi,
} from "./item-bundle-social-comment-api.js";

export type ApiV1CommentImportCommentsResponse = {
  items: ItemBundleSocialCommentApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CommentImportCommentsResponseSchema: Schema<ApiV1CommentImportCommentsResponse> =
  s.object<ApiV1CommentImportCommentsResponse>(
    {
      items: s.array(s.lazy(() => itemBundleSocialCommentApiSchema)),
      total: s.float64(),
    },
    { additionalProperties: s.json() },
  );
