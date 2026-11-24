import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";
import {
  watchTestResultInternalSchema,
  watchTestResultSchema,
  type WatchTestResult,
} from "./watch-test-result.js";

export type V1WatchesTestResponse = {
  success?: boolean;
  /** Result of POST /v1/watches/test (the pre-create dry-run). */
  data?: WatchTestResult;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WatchesTestResponseProperties: s.Shape<V1WatchesTestResponse> = {
  success: s.optional(s.boolean()),
  data: s.optional(s.lazy(() => watchTestResultInternalSchema)),
  meta: s.optional(s.lazy(() => responseMetaSchema)),
};

export const v1WatchesTestResponseInternalSchema: Schema<V1WatchesTestResponse> =
  s.object<V1WatchesTestResponse>(v1WatchesTestResponseProperties, { additionalProperties: s.json() });

export const v1WatchesTestResponseSchema: Schema<V1WatchesTestResponse> = s.lazySchema(() =>
  s.object<V1WatchesTestResponse>(
    {
      ...v1WatchesTestResponseProperties,
      data: s.optional(s.lazy(() => watchTestResultSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
