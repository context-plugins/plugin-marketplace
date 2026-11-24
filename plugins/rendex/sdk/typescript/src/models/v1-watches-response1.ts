import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataRendexRenderingWatchApiInternalSchema,
  dataRendexRenderingWatchApiSchema,
  type DataRendexRenderingWatchApi,
} from "./data-rendex-rendering-watch-api.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

export type V1WatchesResponse1 = {
  success?: boolean;
  data?: DataRendexRenderingWatchApi;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WatchesResponse1Properties: s.Shape<V1WatchesResponse1> = {
  success: s.optional(s.boolean()),
  data: s.optional(s.lazy(() => dataRendexRenderingWatchApiInternalSchema)),
  meta: s.optional(s.lazy(() => responseMetaSchema)),
};

export const v1WatchesResponse1InternalSchema: Schema<V1WatchesResponse1> = s.object<V1WatchesResponse1>(
  v1WatchesResponse1Properties,
  { additionalProperties: s.json() },
);

export const v1WatchesResponse1Schema: Schema<V1WatchesResponse1> = s.lazySchema(() =>
  s.object<V1WatchesResponse1>(
    {
      ...v1WatchesResponse1Properties,
      data: s.optional(s.lazy(() => dataRendexRenderingWatchApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
