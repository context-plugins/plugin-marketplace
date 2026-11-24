import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildUploadUrlResponse = {
  uploadUrl: string;
  buildId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildUploadUrlResponseSchema: Schema<BuildUploadUrlResponse> = s.object<BuildUploadUrlResponse>(
  {
    uploadUrl: s.string(),
    buildId: s.string(),
    _keysMap: {
      uploadUrl: "upload_url",
      buildId: "build_id",
    },
  },
  { additionalProperties: s.json() },
);
