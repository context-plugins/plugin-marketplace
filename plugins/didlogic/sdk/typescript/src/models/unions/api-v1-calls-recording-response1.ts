import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  apiV1CallsRecordingResponseSchema,
  type ApiV1CallsRecordingResponse,
} from "../api-v1-calls-recording-response.js";
import { errorSchema, type Error } from "../error.js";

export type ApiV1CallsRecordingResponse1 = Error | ApiV1CallsRecordingResponse;

export const apiV1CallsRecordingResponse1Schema: Schema<ApiV1CallsRecordingResponse1> =
  s.of<ApiV1CallsRecordingResponse1>(
    s.union([s.lazy(() => errorSchema), s.lazy(() => apiV1CallsRecordingResponseSchema)]),
  );
