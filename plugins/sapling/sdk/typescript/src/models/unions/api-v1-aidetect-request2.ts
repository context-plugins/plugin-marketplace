import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1AidetectRequestInternalSchema,
  apiV1AidetectRequestSchema,
  type ApiV1AidetectRequest,
} from "../api-v1-aidetect-request.js";
import {
  apiV1AidetectRequest1InternalSchema,
  apiV1AidetectRequest1Schema,
  type ApiV1AidetectRequest1,
} from "../api-v1-aidetect-request1.js";

export type ApiV1AidetectRequest2 = ApiV1AidetectRequest | ApiV1AidetectRequest1;

export const apiV1AidetectRequest2InternalSchema: Schema<ApiV1AidetectRequest2> = s.of<ApiV1AidetectRequest2>(
  s.union([
    s.lazy(() => apiV1AidetectRequestInternalSchema),
    s.lazy(() => apiV1AidetectRequest1InternalSchema),
  ]),
);

export const apiV1AidetectRequest2Schema: Schema<ApiV1AidetectRequest2> = s.lazySchema(() =>
  s.of<ApiV1AidetectRequest2>(
    s.union([s.lazy(() => apiV1AidetectRequestSchema), s.lazy(() => apiV1AidetectRequest1Schema)]),
  ),
);
