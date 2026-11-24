import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1SummarizeRequestInternalSchema,
  apiV1SummarizeRequestSchema,
  type ApiV1SummarizeRequest,
} from "../api-v1-summarize-request.js";
import {
  apiV1SummarizeRequest1InternalSchema,
  apiV1SummarizeRequest1Schema,
  type ApiV1SummarizeRequest1,
} from "../api-v1-summarize-request1.js";

export type ApiV1SummarizeRequest2 = ApiV1SummarizeRequest | ApiV1SummarizeRequest1;

export const apiV1SummarizeRequest2InternalSchema: Schema<ApiV1SummarizeRequest2> =
  s.of<ApiV1SummarizeRequest2>(
    s.union([
      s.lazy(() => apiV1SummarizeRequestInternalSchema),
      s.lazy(() => apiV1SummarizeRequest1InternalSchema),
    ]),
  );

export const apiV1SummarizeRequest2Schema: Schema<ApiV1SummarizeRequest2> = s.lazySchema(() =>
  s.of<ApiV1SummarizeRequest2>(
    s.union([s.lazy(() => apiV1SummarizeRequestSchema), s.lazy(() => apiV1SummarizeRequest1Schema)]),
  ),
);
