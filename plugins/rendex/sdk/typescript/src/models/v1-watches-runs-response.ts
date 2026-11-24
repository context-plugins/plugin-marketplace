import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1RendexRenderingWatchApiInternalSchema,
  data1RendexRenderingWatchApiSchema,
  type Data1RendexRenderingWatchApi,
} from "./data1-rendex-rendering-watch-api.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

export type V1WatchesRunsResponse = {
  success?: boolean;
  data?: Data1RendexRenderingWatchApi;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WatchesRunsResponseProperties: s.Shape<V1WatchesRunsResponse> = {
  success: s.optional(s.boolean()),
  data: s.optional(s.lazy(() => data1RendexRenderingWatchApiInternalSchema)),
  meta: s.optional(s.lazy(() => responseMetaSchema)),
};

export const v1WatchesRunsResponseInternalSchema: Schema<V1WatchesRunsResponse> =
  s.object<V1WatchesRunsResponse>(v1WatchesRunsResponseProperties, { additionalProperties: s.json() });

export const v1WatchesRunsResponseSchema: Schema<V1WatchesRunsResponse> = s.lazySchema(() =>
  s.object<V1WatchesRunsResponse>(
    {
      ...v1WatchesRunsResponseProperties,
      data: s.optional(s.lazy(() => data1RendexRenderingWatchApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
