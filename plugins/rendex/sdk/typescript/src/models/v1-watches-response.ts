import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";
import { watchInternalSchema, watchSchema, type Watch } from "./watch.js";

export type V1WatchesResponse = {
  success?: boolean;
  /** A monitoring configuration. webhookUrl is redacted to its host on read. */
  data?: Watch;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WatchesResponseProperties: s.Shape<V1WatchesResponse> = {
  success: s.optional(s.boolean()),
  data: s.optional(s.lazy(() => watchInternalSchema)),
  meta: s.optional(s.lazy(() => responseMetaSchema)),
};

export const v1WatchesResponseInternalSchema: Schema<V1WatchesResponse> = s.object<V1WatchesResponse>(
  v1WatchesResponseProperties,
  { additionalProperties: s.json() },
);

export const v1WatchesResponseSchema: Schema<V1WatchesResponse> = s.lazySchema(() =>
  s.object<V1WatchesResponse>(
    {
      ...v1WatchesResponseProperties,
      data: s.optional(s.lazy(() => watchSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
