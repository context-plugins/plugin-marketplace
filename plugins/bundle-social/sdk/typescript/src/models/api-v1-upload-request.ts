import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UploadRequest = {
  ids: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadRequestProperties: s.Shape<ApiV1UploadRequest> = {
  ids: s.array(s.string()),
};

export const apiV1UploadRequestInternalSchema: Schema<ApiV1UploadRequest> = s.object<ApiV1UploadRequest>(
  apiV1UploadRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1UploadRequestSchema: Schema<ApiV1UploadRequest> = s.lazySchema(() =>
  s.object<ApiV1UploadRequest>(
    {
      ...apiV1UploadRequestProperties,
      ids: s.array(s.string()).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
