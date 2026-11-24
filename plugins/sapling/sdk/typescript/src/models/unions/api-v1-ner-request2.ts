import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1NerRequestInternalSchema,
  apiV1NerRequestSchema,
  type ApiV1NerRequest,
} from "../api-v1-ner-request.js";
import {
  apiV1NerRequest1InternalSchema,
  apiV1NerRequest1Schema,
  type ApiV1NerRequest1,
} from "../api-v1-ner-request1.js";

export type ApiV1NerRequest2 = ApiV1NerRequest | ApiV1NerRequest1;

export const apiV1NerRequest2InternalSchema: Schema<ApiV1NerRequest2> = s.of<ApiV1NerRequest2>(
  s.union([s.lazy(() => apiV1NerRequestInternalSchema), s.lazy(() => apiV1NerRequest1InternalSchema)]),
);

export const apiV1NerRequest2Schema: Schema<ApiV1NerRequest2> = s.lazySchema(() =>
  s.of<ApiV1NerRequest2>(
    s.union([s.lazy(() => apiV1NerRequestSchema), s.lazy(() => apiV1NerRequest1Schema)]),
  ),
);
