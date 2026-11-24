import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataRendexRenderingBatchApiSchema,
  type DataRendexRenderingBatchApi,
} from "./data-rendex-rendering-batch-api.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

export type BatchResponse = {
  success?: boolean;
  data?: DataRendexRenderingBatchApi;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchResponseSchema: Schema<BatchResponse> = s.object<BatchResponse>(
  {
    success: s.optional(s.boolean()),
    data: s.optional(s.lazy(() => dataRendexRenderingBatchApiSchema)),
    meta: s.optional(s.lazy(() => responseMetaSchema)),
  },
  { additionalProperties: s.json() },
);
