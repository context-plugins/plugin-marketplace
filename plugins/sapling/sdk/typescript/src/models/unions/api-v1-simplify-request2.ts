import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1SimplifyRequestInternalSchema,
  apiV1SimplifyRequestSchema,
  type ApiV1SimplifyRequest,
} from "../api-v1-simplify-request.js";
import {
  apiV1SimplifyRequest1InternalSchema,
  apiV1SimplifyRequest1Schema,
  type ApiV1SimplifyRequest1,
} from "../api-v1-simplify-request1.js";

export type ApiV1SimplifyRequest2 = ApiV1SimplifyRequest | ApiV1SimplifyRequest1;

export const apiV1SimplifyRequest2InternalSchema: Schema<ApiV1SimplifyRequest2> = s.of<ApiV1SimplifyRequest2>(
  s.union([
    s.lazy(() => apiV1SimplifyRequestInternalSchema),
    s.lazy(() => apiV1SimplifyRequest1InternalSchema),
  ]),
);

export const apiV1SimplifyRequest2Schema: Schema<ApiV1SimplifyRequest2> = s.lazySchema(() =>
  s.of<ApiV1SimplifyRequest2>(
    s.union([s.lazy(() => apiV1SimplifyRequestSchema), s.lazy(() => apiV1SimplifyRequest1Schema)]),
  ),
);
