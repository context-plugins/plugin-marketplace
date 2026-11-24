import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1StyleguideRequestInternalSchema,
  apiV1StyleguideRequestSchema,
  type ApiV1StyleguideRequest,
} from "../api-v1-styleguide-request.js";
import {
  apiV1StyleguideRequest1InternalSchema,
  apiV1StyleguideRequest1Schema,
  type ApiV1StyleguideRequest1,
} from "../api-v1-styleguide-request1.js";
import {
  apiV1StyleguideRequest2InternalSchema,
  apiV1StyleguideRequest2Schema,
  type ApiV1StyleguideRequest2,
} from "../api-v1-styleguide-request2.js";
import {
  apiV1StyleguideRequest3InternalSchema,
  apiV1StyleguideRequest3Schema,
  type ApiV1StyleguideRequest3,
} from "../api-v1-styleguide-request3.js";

export type ApiV1StyleguideRequest4 =
  | ApiV1StyleguideRequest
  | ApiV1StyleguideRequest1
  | ApiV1StyleguideRequest2
  | ApiV1StyleguideRequest3;

export const apiV1StyleguideRequest4InternalSchema: Schema<ApiV1StyleguideRequest4> =
  s.of<ApiV1StyleguideRequest4>(
    s.union([
      s.lazy(() => apiV1StyleguideRequestInternalSchema),
      s.lazy(() => apiV1StyleguideRequest1InternalSchema),
      s.lazy(() => apiV1StyleguideRequest2InternalSchema),
      s.lazy(() => apiV1StyleguideRequest3InternalSchema),
    ]),
  );

export const apiV1StyleguideRequest4Schema: Schema<ApiV1StyleguideRequest4> = s.lazySchema(() =>
  s.of<ApiV1StyleguideRequest4>(
    s.union([
      s.lazy(() => apiV1StyleguideRequestSchema),
      s.lazy(() => apiV1StyleguideRequest1Schema),
      s.lazy(() => apiV1StyleguideRequest2Schema),
      s.lazy(() => apiV1StyleguideRequest3Schema),
    ]),
  ),
);
