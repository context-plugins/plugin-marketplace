import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UploadMultipartAbortRequest = {
  teamId?: string | null;
  path: string;
  uploadId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1UploadMultipartAbortRequestSchema: Schema<ApiV1UploadMultipartAbortRequest> =
  s.object<ApiV1UploadMultipartAbortRequest>(
    {
      teamId: s.optionalNullable(s.string()),
      path: s.string(),
      uploadId: s.string(),
    },
    { additionalProperties: s.json() },
  );
