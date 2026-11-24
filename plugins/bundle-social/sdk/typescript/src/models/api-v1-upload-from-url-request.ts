import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1UploadFromUrlRequest = {
  teamId?: string | null;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadFromUrlRequestProperties: s.Shape<ApiV1UploadFromUrlRequest> = {
  teamId: s.optionalNullable(s.string()),
  url: s.string(),
};

export const apiV1UploadFromUrlRequestInternalSchema: Schema<ApiV1UploadFromUrlRequest> =
  s.object<ApiV1UploadFromUrlRequest>(apiV1UploadFromUrlRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1UploadFromUrlRequestSchema: Schema<ApiV1UploadFromUrlRequest> = s.lazySchema(() =>
  s.object<ApiV1UploadFromUrlRequest>(
    {
      ...apiV1UploadFromUrlRequestProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
