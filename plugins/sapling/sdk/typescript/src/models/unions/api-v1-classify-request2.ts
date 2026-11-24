import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1ClassifyRequestInternalSchema,
  apiV1ClassifyRequestSchema,
  type ApiV1ClassifyRequest,
} from "../api-v1-classify-request.js";
import {
  apiV1ClassifyRequest1InternalSchema,
  apiV1ClassifyRequest1Schema,
  type ApiV1ClassifyRequest1,
} from "../api-v1-classify-request1.js";

export type ApiV1ClassifyRequest2 = ApiV1ClassifyRequest | ApiV1ClassifyRequest1;

export const apiV1ClassifyRequest2InternalSchema: Schema<ApiV1ClassifyRequest2> = s.of<ApiV1ClassifyRequest2>(
  s.union([
    s.lazy(() => apiV1ClassifyRequestInternalSchema),
    s.lazy(() => apiV1ClassifyRequest1InternalSchema),
  ]),
);

export const apiV1ClassifyRequest2Schema: Schema<ApiV1ClassifyRequest2> = s.lazySchema(() =>
  s.of<ApiV1ClassifyRequest2>(
    s.union([s.lazy(() => apiV1ClassifyRequestSchema), s.lazy(() => apiV1ClassifyRequest1Schema)]),
  ),
);
