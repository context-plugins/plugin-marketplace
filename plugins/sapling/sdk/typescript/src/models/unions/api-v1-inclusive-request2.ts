import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1InclusiveRequestInternalSchema,
  apiV1InclusiveRequestSchema,
  type ApiV1InclusiveRequest,
} from "../api-v1-inclusive-request.js";
import {
  apiV1InclusiveRequest1InternalSchema,
  apiV1InclusiveRequest1Schema,
  type ApiV1InclusiveRequest1,
} from "../api-v1-inclusive-request1.js";

export type ApiV1InclusiveRequest2 = ApiV1InclusiveRequest | ApiV1InclusiveRequest1;

export const apiV1InclusiveRequest2InternalSchema: Schema<ApiV1InclusiveRequest2> =
  s.of<ApiV1InclusiveRequest2>(
    s.union([
      s.lazy(() => apiV1InclusiveRequestInternalSchema),
      s.lazy(() => apiV1InclusiveRequest1InternalSchema),
    ]),
  );

export const apiV1InclusiveRequest2Schema: Schema<ApiV1InclusiveRequest2> = s.lazySchema(() =>
  s.of<ApiV1InclusiveRequest2>(
    s.union([s.lazy(() => apiV1InclusiveRequestSchema), s.lazy(() => apiV1InclusiveRequest1Schema)]),
  ),
);
