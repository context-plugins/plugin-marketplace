import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1ExtractRequestInternalSchema,
  apiV1ExtractRequestSchema,
  type ApiV1ExtractRequest,
} from "../api-v1-extract-request.js";
import {
  apiV1ExtractRequest1InternalSchema,
  apiV1ExtractRequest1Schema,
  type ApiV1ExtractRequest1,
} from "../api-v1-extract-request1.js";

export type ApiV1ExtractRequest2 = ApiV1ExtractRequest | ApiV1ExtractRequest1;

export const apiV1ExtractRequest2InternalSchema: Schema<ApiV1ExtractRequest2> = s.of<ApiV1ExtractRequest2>(
  s.union([
    s.lazy(() => apiV1ExtractRequestInternalSchema),
    s.lazy(() => apiV1ExtractRequest1InternalSchema),
  ]),
);

export const apiV1ExtractRequest2Schema: Schema<ApiV1ExtractRequest2> = s.lazySchema(() =>
  s.of<ApiV1ExtractRequest2>(
    s.union([s.lazy(() => apiV1ExtractRequestSchema), s.lazy(() => apiV1ExtractRequest1Schema)]),
  ),
);
