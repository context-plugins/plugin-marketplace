import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiCacheSchema, type ApiCache } from "./api-cache.js";

export type UpdateApiCacheResponse = {
  apiCache?: ApiCache;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateApiCacheResponseSchema: Schema<UpdateApiCacheResponse> = s.object<UpdateApiCacheResponse>(
  {
    apiCache: s.optional(s.lazy(() => apiCacheSchema)),
  },
  { additionalProperties: s.json() },
);
