import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../error-response.js";
import {
  streamRecordErrorResponseSchema,
  type StreamRecordErrorResponse,
} from "../stream-record-error-response.js";

export type KnowledgeBaseStreamRecordResponse = ErrorResponse | StreamRecordErrorResponse;

export const knowledgeBaseStreamRecordResponseSchema: Schema<KnowledgeBaseStreamRecordResponse> =
  s.of<KnowledgeBaseStreamRecordResponse>(
    s.union([s.lazy(() => errorResponseSchema), s.lazy(() => streamRecordErrorResponseSchema)]),
  );
