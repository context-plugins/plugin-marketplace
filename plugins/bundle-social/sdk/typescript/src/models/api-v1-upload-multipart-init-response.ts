import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { partInternalSchema, partSchema, type Part } from "./part.js";

export type ApiV1UploadMultipartInitResponse = {
  uploadId: string;
  path: string;
  partSize: number;
  parts: Part[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadMultipartInitResponseProperties: s.Shape<ApiV1UploadMultipartInitResponse> = {
  uploadId: s.string(),
  path: s.string(),
  partSize: s.int(),
  parts: s.array(s.lazy(() => partInternalSchema)),
};

export const apiV1UploadMultipartInitResponseInternalSchema: Schema<ApiV1UploadMultipartInitResponse> =
  s.object<ApiV1UploadMultipartInitResponse>(apiV1UploadMultipartInitResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1UploadMultipartInitResponseSchema: Schema<ApiV1UploadMultipartInitResponse> = s.lazySchema(
  () =>
    s.object<ApiV1UploadMultipartInitResponse>(
      {
        ...apiV1UploadMultipartInitResponseProperties,
        partSize: s.int().check(s.gte(1)),
        parts: s.array(s.lazy(() => partSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
