import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { asyncUploadResponseSchema, type AsyncUploadResponse } from "../async-upload-response.js";
import { uploadResponseSchema, type UploadResponse } from "../upload-response.js";

export type V11UploadResponse = UploadResponse | AsyncUploadResponse;

export const v11UploadResponseSchema: Schema<V11UploadResponse> = s.of<V11UploadResponse>(
  s.union([s.lazy(() => uploadResponseSchema), s.lazy(() => asyncUploadResponseSchema)]),
);
