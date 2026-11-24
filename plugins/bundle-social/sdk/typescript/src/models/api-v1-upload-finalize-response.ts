import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeBundleSocialUploadApiSchema,
  type TypeBundleSocialUploadApi,
} from "./type-bundle-social-upload-api.js";

export type ApiV1UploadFinalizeResponse = {
  id: string;
  teamId?: string | null;
  organizationId?: string | null;
  iconUrl?: string | null;
  thumbnailUrl?: string | null;
  url?: string | null;
  externalLink?: string | null;
  iconPath?: string | null;
  thumbnailPath?: string | null;
  path?: string | null;
  type: TypeBundleSocialUploadApi;
  width?: number | null;
  height?: number | null;
  fileSize?: number | null;
  videoLength?: number | null;
  mime?: string | null;
  ext?: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1UploadFinalizeResponseProperties: s.Shape<ApiV1UploadFinalizeResponse> = {
  id: s.string(),
  teamId: s.optionalNullable(s.string()),
  organizationId: s.optionalNullable(s.string()),
  iconUrl: s.optionalNullable(s.string()),
  thumbnailUrl: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  externalLink: s.optionalNullable(s.string()),
  iconPath: s.optionalNullable(s.string()),
  thumbnailPath: s.optionalNullable(s.string()),
  path: s.optionalNullable(s.string()),
  type: typeBundleSocialUploadApiSchema,
  width: s.optionalNullable(s.float64()),
  height: s.optionalNullable(s.float64()),
  fileSize: s.optionalNullable(s.float64()),
  videoLength: s.optionalNullable(s.float64()),
  mime: s.optionalNullable(s.string()),
  ext: s.optionalNullable(s.string()),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
};

export const apiV1UploadFinalizeResponseInternalSchema: Schema<ApiV1UploadFinalizeResponse> =
  s.object<ApiV1UploadFinalizeResponse>(apiV1UploadFinalizeResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1UploadFinalizeResponseSchema: Schema<ApiV1UploadFinalizeResponse> = s.lazySchema(() =>
  s.object<ApiV1UploadFinalizeResponse>(
    {
      ...apiV1UploadFinalizeResponseProperties,
      iconUrl: s.optionalNullable(s.string().check(s.url())),
      thumbnailUrl: s.optionalNullable(s.string().check(s.url())),
      url: s.optionalNullable(s.string().check(s.url())),
      externalLink: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
