import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1TranslateRequestInternalSchema,
  apiV1TranslateRequestSchema,
  type ApiV1TranslateRequest,
} from "../api-v1-translate-request.js";
import {
  apiV1TranslateRequest1InternalSchema,
  apiV1TranslateRequest1Schema,
  type ApiV1TranslateRequest1,
} from "../api-v1-translate-request1.js";

export type ApiV1TranslateRequest2 = ApiV1TranslateRequest | ApiV1TranslateRequest1;

export const apiV1TranslateRequest2InternalSchema: Schema<ApiV1TranslateRequest2> =
  s.of<ApiV1TranslateRequest2>(
    s.union([
      s.lazy(() => apiV1TranslateRequestInternalSchema),
      s.lazy(() => apiV1TranslateRequest1InternalSchema),
    ]),
  );

export const apiV1TranslateRequest2Schema: Schema<ApiV1TranslateRequest2> = s.lazySchema(() =>
  s.of<ApiV1TranslateRequest2>(
    s.union([s.lazy(() => apiV1TranslateRequestSchema), s.lazy(() => apiV1TranslateRequest1Schema)]),
  ),
);
