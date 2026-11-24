import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UploadMultipartSignRequest = {
  teamId?: string | null;
  partNumbers: number[];
  path: string;
  uploadId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadMultipartSignRequestProperties: s.Shape<ApiV1UploadMultipartSignRequest> = {
  teamId: s.optionalNullable(s.string()),
  partNumbers: s.array(s.int()),
  path: s.string(),
  uploadId: s.string(),
};

export const apiV1UploadMultipartSignRequestInternalSchema: Schema<ApiV1UploadMultipartSignRequest> =
  s.object<ApiV1UploadMultipartSignRequest>(apiV1UploadMultipartSignRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1UploadMultipartSignRequestSchema: Schema<ApiV1UploadMultipartSignRequest> = s.lazySchema(
  () =>
    s.object<ApiV1UploadMultipartSignRequest>(
      {
        ...apiV1UploadMultipartSignRequestProperties,
        partNumbers: s.array(s.int().check(s.gte(1), s.lte(10000))).check(s.minLength(1), s.maxLength(10000)),
      },
      { additionalProperties: s.json() },
    ),
);
