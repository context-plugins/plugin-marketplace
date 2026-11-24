import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { partInternalSchema, partSchema, type Part } from "./part.js";

export type ApiV1UploadMultipartSignResponse = {
  parts: Part[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadMultipartSignResponseProperties: s.Shape<ApiV1UploadMultipartSignResponse> = {
  parts: s.array(s.lazy(() => partInternalSchema)),
};

export const apiV1UploadMultipartSignResponseInternalSchema: Schema<ApiV1UploadMultipartSignResponse> =
  s.object<ApiV1UploadMultipartSignResponse>(apiV1UploadMultipartSignResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1UploadMultipartSignResponseSchema: Schema<ApiV1UploadMultipartSignResponse> = s.lazySchema(
  () =>
    s.object<ApiV1UploadMultipartSignResponse>(
      {
        ...apiV1UploadMultipartSignResponseProperties,
        parts: s.array(s.lazy(() => partSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
