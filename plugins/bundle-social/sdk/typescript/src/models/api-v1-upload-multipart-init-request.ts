import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mimeTypeSchema, type MimeType } from "./mime-type.js";

export type ApiV1UploadMultipartInitRequest = {
  teamId?: string | null;
  fileName: string;
  mimeType: MimeType;
  fileSize: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadMultipartInitRequestProperties: s.Shape<ApiV1UploadMultipartInitRequest> = {
  teamId: s.optionalNullable(s.string()),
  fileName: s.string(),
  mimeType: mimeTypeSchema,
  fileSize: s.int(),
};

export const apiV1UploadMultipartInitRequestInternalSchema: Schema<ApiV1UploadMultipartInitRequest> =
  s.object<ApiV1UploadMultipartInitRequest>(apiV1UploadMultipartInitRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1UploadMultipartInitRequestSchema: Schema<ApiV1UploadMultipartInitRequest> = s.lazySchema(
  () =>
    s.object<ApiV1UploadMultipartInitRequest>(
      {
        ...apiV1UploadMultipartInitRequestProperties,
        fileSize: s.int().check(s.gte(1)),
      },
      { additionalProperties: s.json() },
    ),
);
