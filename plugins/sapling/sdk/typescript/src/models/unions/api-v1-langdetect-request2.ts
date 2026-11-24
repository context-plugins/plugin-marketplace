import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1LangdetectRequestInternalSchema,
  apiV1LangdetectRequestSchema,
  type ApiV1LangdetectRequest,
} from "../api-v1-langdetect-request.js";
import {
  apiV1LangdetectRequest1InternalSchema,
  apiV1LangdetectRequest1Schema,
  type ApiV1LangdetectRequest1,
} from "../api-v1-langdetect-request1.js";

export type ApiV1LangdetectRequest2 = ApiV1LangdetectRequest | ApiV1LangdetectRequest1;

export const apiV1LangdetectRequest2InternalSchema: Schema<ApiV1LangdetectRequest2> =
  s.of<ApiV1LangdetectRequest2>(
    s.union([
      s.lazy(() => apiV1LangdetectRequestInternalSchema),
      s.lazy(() => apiV1LangdetectRequest1InternalSchema),
    ]),
  );

export const apiV1LangdetectRequest2Schema: Schema<ApiV1LangdetectRequest2> = s.lazySchema(() =>
  s.of<ApiV1LangdetectRequest2>(
    s.union([s.lazy(() => apiV1LangdetectRequestSchema), s.lazy(() => apiV1LangdetectRequest1Schema)]),
  ),
);
