import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UploadMultipartAbortResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1UploadMultipartAbortResponseSchema: Schema<ApiV1UploadMultipartAbortResponse> =
  s.object<ApiV1UploadMultipartAbortResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
