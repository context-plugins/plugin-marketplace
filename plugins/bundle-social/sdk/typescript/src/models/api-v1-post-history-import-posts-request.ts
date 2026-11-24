import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PostHistoryImportPostsRequest = {
  teamId: string;
  postIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PostHistoryImportPostsRequestProperties: s.Shape<ApiV1PostHistoryImportPostsRequest> = {
  teamId: s.string(),
  postIds: s.array(s.string()),
};

export const apiV1PostHistoryImportPostsRequestInternalSchema: Schema<ApiV1PostHistoryImportPostsRequest> =
  s.object<ApiV1PostHistoryImportPostsRequest>(apiV1PostHistoryImportPostsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1PostHistoryImportPostsRequestSchema: Schema<ApiV1PostHistoryImportPostsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1PostHistoryImportPostsRequest>(
      {
        ...apiV1PostHistoryImportPostsRequestProperties,
        postIds: s.array(s.string()).check(s.minLength(1), s.maxLength(100)),
      },
      { additionalProperties: s.json() },
    ),
  );
