import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  postBundleSocialPostImportApiSchema,
  type PostBundleSocialPostImportApi,
} from "./post-bundle-social-post-import-api.js";

export type ApiV1PostHistoryImportPostsResponse = {
  posts: PostBundleSocialPostImportApi[];
  total: number;
  limit: number;
  remainingCapacity: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostHistoryImportPostsResponseSchema: Schema<ApiV1PostHistoryImportPostsResponse> =
  s.object<ApiV1PostHistoryImportPostsResponse>(
    {
      posts: s.array(s.lazy(() => postBundleSocialPostImportApiSchema)),
      total: s.float64(),
      limit: s.float64(),
      remainingCapacity: s.float64(),
    },
    { additionalProperties: s.json() },
  );
