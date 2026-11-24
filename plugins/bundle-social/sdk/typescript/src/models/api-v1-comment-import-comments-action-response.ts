import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialCommentApiSchema,
  type ItemBundleSocialCommentApi,
} from "./item-bundle-social-comment-api.js";

export type ApiV1CommentImportCommentsActionResponse = {
  success: boolean;
  item: ItemBundleSocialCommentApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CommentImportCommentsActionResponseSchema: Schema<ApiV1CommentImportCommentsActionResponse> =
  s.object<ApiV1CommentImportCommentsActionResponse>(
    {
      success: s.boolean(),
      item: itemBundleSocialCommentApiSchema,
    },
    { additionalProperties: s.json() },
  );
