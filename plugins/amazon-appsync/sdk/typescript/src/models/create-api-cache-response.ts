import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiCacheSchema, type ApiCache } from "./api-cache.js";

export type CreateApiCacheResponse = {
  apiCache?: ApiCache;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createApiCacheResponseSchema: Schema<CreateApiCacheResponse> = s.object<CreateApiCacheResponse>(
  {
    apiCache: s.optional(s.lazy(() => apiCacheSchema)),
  },
  { additionalProperties: s.json() },
);
