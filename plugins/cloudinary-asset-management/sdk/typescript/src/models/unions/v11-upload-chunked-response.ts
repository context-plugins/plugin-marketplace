import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { asyncUploadResponseSchema, type AsyncUploadResponse } from "../async-upload-response.js";
import {
  nonFinalChunkUploadResponseSchema,
  type NonFinalChunkUploadResponse,
} from "../non-final-chunk-upload-response.js";
import { uploadResponseSchema, type UploadResponse } from "../upload-response.js";

export type V11UploadChunkedResponse = NonFinalChunkUploadResponse | UploadResponse | AsyncUploadResponse;

export const v11UploadChunkedResponseSchema: Schema<V11UploadChunkedResponse> =
  s.of<V11UploadChunkedResponse>(
    s.union([
      s.lazy(() => nonFinalChunkUploadResponseSchema),
      s.lazy(() => uploadResponseSchema),
      s.lazy(() => asyncUploadResponseSchema),
    ]),
  );
