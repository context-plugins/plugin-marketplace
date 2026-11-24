import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1SafetyRequestInternalSchema,
  apiV1SafetyRequestSchema,
  type ApiV1SafetyRequest,
} from "../api-v1-safety-request.js";
import {
  apiV1SafetyRequest1InternalSchema,
  apiV1SafetyRequest1Schema,
  type ApiV1SafetyRequest1,
} from "../api-v1-safety-request1.js";

export type ApiV1SafetyRequest2 = ApiV1SafetyRequest | ApiV1SafetyRequest1;

export const apiV1SafetyRequest2InternalSchema: Schema<ApiV1SafetyRequest2> = s.of<ApiV1SafetyRequest2>(
  s.union([s.lazy(() => apiV1SafetyRequestInternalSchema), s.lazy(() => apiV1SafetyRequest1InternalSchema)]),
);

export const apiV1SafetyRequest2Schema: Schema<ApiV1SafetyRequest2> = s.lazySchema(() =>
  s.of<ApiV1SafetyRequest2>(
    s.union([s.lazy(() => apiV1SafetyRequestSchema), s.lazy(() => apiV1SafetyRequest1Schema)]),
  ),
);
