import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1CommentsResolveRequest = {
  note?: string;
  reopen?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1CommentsResolveRequestProperties: s.Shape<ApiV1CommentsResolveRequest> = {
  note: s.optional(s.string()),
  reopen: s.optional(s.boolean()),
};

export const apiV1CommentsResolveRequestInternalSchema: Schema<ApiV1CommentsResolveRequest> =
  s.object<ApiV1CommentsResolveRequest>(apiV1CommentsResolveRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1CommentsResolveRequestSchema: Schema<ApiV1CommentsResolveRequest> = s.lazySchema(() =>
  s.object<ApiV1CommentsResolveRequest>(
    {
      ...apiV1CommentsResolveRequestProperties,
      note: s.optional(s.string().check(s.maxLength(10000))),
    },
    { additionalProperties: s.json() },
  ),
);
