import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataRendexRenderingJobsApiInternalSchema,
  dataRendexRenderingJobsApiSchema,
  type DataRendexRenderingJobsApi,
} from "./data-rendex-rendering-jobs-api.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

export type BatchStatusResponse = {
  success?: boolean;
  data?: DataRendexRenderingJobsApi;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchStatusResponseProperties: s.Shape<BatchStatusResponse> = {
  success: s.optional(s.boolean()),
  data: s.optional(s.lazy(() => dataRendexRenderingJobsApiInternalSchema)),
  meta: s.optional(s.lazy(() => responseMetaSchema)),
};

export const batchStatusResponseInternalSchema: Schema<BatchStatusResponse> = s.object<BatchStatusResponse>(
  batchStatusResponseProperties,
  { additionalProperties: s.json() },
);

export const batchStatusResponseSchema: Schema<BatchStatusResponse> = s.lazySchema(() =>
  s.object<BatchStatusResponse>(
    {
      ...batchStatusResponseProperties,
      data: s.optional(s.lazy(() => dataRendexRenderingJobsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
