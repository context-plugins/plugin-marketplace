import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1QualityRequestInternalSchema,
  apiV1QualityRequestSchema,
  type ApiV1QualityRequest,
} from "../api-v1-quality-request.js";
import {
  apiV1QualityRequest1InternalSchema,
  apiV1QualityRequest1Schema,
  type ApiV1QualityRequest1,
} from "../api-v1-quality-request1.js";

export type ApiV1QualityRequest2 = ApiV1QualityRequest | ApiV1QualityRequest1;

export const apiV1QualityRequest2InternalSchema: Schema<ApiV1QualityRequest2> = s.of<ApiV1QualityRequest2>(
  s.union([
    s.lazy(() => apiV1QualityRequestInternalSchema),
    s.lazy(() => apiV1QualityRequest1InternalSchema),
  ]),
);

export const apiV1QualityRequest2Schema: Schema<ApiV1QualityRequest2> = s.lazySchema(() =>
  s.of<ApiV1QualityRequest2>(
    s.union([s.lazy(() => apiV1QualityRequestSchema), s.lazy(() => apiV1QualityRequest1Schema)]),
  ),
);
