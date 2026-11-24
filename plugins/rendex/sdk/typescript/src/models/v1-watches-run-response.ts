import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data2RendexRenderingWatchApiSchema,
  type Data2RendexRenderingWatchApi,
} from "./data2-rendex-rendering-watch-api.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

export type V1WatchesRunResponse = {
  success?: boolean;
  data?: Data2RendexRenderingWatchApi;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WatchesRunResponseSchema: Schema<V1WatchesRunResponse> = s.object<V1WatchesRunResponse>(
  {
    success: s.optional(s.boolean()),
    data: s.optional(s.lazy(() => data2RendexRenderingWatchApiSchema)),
    meta: s.optional(s.lazy(() => responseMetaSchema)),
  },
  { additionalProperties: s.json() },
);
