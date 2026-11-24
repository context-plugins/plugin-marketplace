import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mimeTypeSchema, type MimeType } from "./mime-type.js";

export type ApiV1UploadInitRequest = {
  teamId?: string | null;
  fileName: string;
  mimeType: MimeType;
  fileSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadInitRequestProperties: s.Shape<ApiV1UploadInitRequest> = {
  teamId: s.optionalNullable(s.string()),
  fileName: s.string(),
  mimeType: mimeTypeSchema,
  fileSize: s.optional(s.int()),
};

export const apiV1UploadInitRequestInternalSchema: Schema<ApiV1UploadInitRequest> =
  s.object<ApiV1UploadInitRequest>(apiV1UploadInitRequestProperties, { additionalProperties: s.json() });

export const apiV1UploadInitRequestSchema: Schema<ApiV1UploadInitRequest> = s.lazySchema(() =>
  s.object<ApiV1UploadInitRequest>(
    {
      ...apiV1UploadInitRequestProperties,
      fileSize: s.optional(s.int().check(s.gte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
